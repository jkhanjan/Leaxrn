import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";

gsap.registerPlugin(ScrollTrigger);

const canvasContainer = document.querySelector("#canvasContainer");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  85,
  canvasContainer.offsetWidth / canvasContainer.offsetHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("canvas"),
});

renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader().load("./img/mars.jpg"),
      },
    },
  })
);

const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  })
);
atmosphere.scale.set(1.07, 1, 1.2);

scene.add(atmosphere);
const group = new THREE.Group();
group.add(sphere);
scene.add(group);

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
  color: `0xffffff`,
});

const starVertices = [];
for (let i = 0; i < 10000; i++) {
  const x = (Math.random() - 0.5) * 1000;
  const y = (Math.random() - 0.5) * 1000;
  const z = -Math.random() * 10000;
  starVertices.push(x, y, z);
}
starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starVertices, 3)
);

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

camera.position.z = 10;

const mouse = {
  x: 0,
  y: 0,
};

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.001;
  gsap.to(group.rotation, {
    x: -mouse.y * 0.1,
    y: mouse.x * 0.1,
    duration: 1,
  });
}

animate();

addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});

// Scroll animation to change camera.position.z with markers enabled
gsap.to(camera.position, {
  z: 10,
  scrollTrigger: {
    trigger: "#main",
    scroller: "#main",
    start: "0% 0%",
    end: "0% 10%",
    scrub: true,
    markers: true, // Enable markers for debugging
  },
});
