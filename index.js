// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main2"),
  smooth: true,
  // other options
});

// Update ScrollTrigger and LocomotiveScroll on scroll
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main2", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely
  pinType: document.querySelector("#main2").style.transform
    ? "transform"
    : "fixed",
});

// Each time the window updates, we should refresh ScrollTrigger and LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// Refresh the ScrollTrigger
ScrollTrigger.refresh();

function loaderAnim() {
  var tl = gsap.timeline();
  tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: -0.2,
  });
  tl.from("#page1-content p", {
    opacity: 0,
  });
  tl.from("#nav", {
    opacity: 0,
  });
  gsap.from("#vr-img", {
    y: 800,
    duration: 2,
  });
  gsap.from("#vr-img2", {
    opacity: 0,
    duration: 2,
  });

  document.addEventListener("mousemove", (e) => {
    const pageContent = document.getElementById("page1-content");
    const vrImg = document.getElementById("vr-img");
    const vrImg2 = document.getElementById("vr-img2");
    const heading = document.querySelector("#heading ");

    const moveX = (e.clientX - window.innerWidth / 3) / 50;
    const moveY = (e.clientY - window.innerHeight / 3) / 50;

    // Move the image
    vrImg.style.transform = `translate(${moveX + 2}px, ${moveY + 2}px)`;
    vrImg2.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Move the heading text
    heading.style.transform = `translate(${moveX / 5}px, ${moveY / 5}px)`;
  });
}
loaderAnim();

function cursorEffect() {
  var cursor = document.querySelector("#cursur");

  // Attach event listener to the entire document
  document.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
      x: event.clientX, // Use clientX and clientY for full page tracking
      y: event.clientY,
    });
  });
}

cursorEffect();

function navbarAnim() {
  var menuopen = document.querySelector("nav #menu");
  var menuclose = document.querySelector("nav2 #close");

  menuopen.addEventListener("click", function () {
    gsap.to("#nav2", {
      transform: "translateY(0vh)",
    });
    gsap.to("");
    gsap.from("#nav2-right a", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      delay: 0.2,
    });
    gsap.from("#nav3 p, #nav3 a ", {
      opacity: 0,
      stagger: 0.1,
      delay: 0.5,
    });
    console.log("clicked");
  });

  menuclose.addEventListener("click", function () {
    gsap.to("#nav2", {
      transform: "translateY(-100vh)",
    });
  });
}
navbarAnim();

function page2animation() {
  gsap.from("#page2 h1", {
    y: 150,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "30% 80%",
      end: "30% 65%",
      scrub: 4,
      // markers:true
    },
  });
  gsap.from("#page2 h4", {
    y: 150,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "30% 80%",
      end: "30% 65%",
      scrub: 4,
      // markers:true
    },
  });
  document.addEventListener("mousemove", (e) => {
    const image = document.getElementById("vr-imgg3");
    const { clientX, clientY } = e;

    // Get the width and height of the image
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;

    // Get the width and height of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate the percentage position of the cursor relative to the window
    const percentageX = (clientX / windowWidth) * 100;
    const percentageY = (clientY / windowHeight) * 100;

    // Calculate the new position of the image
    const offsetX = (percentageX - 50) * 0.05; // Adjust 0.05 for slower rate
    const offsetY = (percentageY - 50) * 0.05; // Adjust 0.05 for slower rate

    // Apply the transformation to the image
    image.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
  });
}
page2animation();

function page3animation() {
  gsap.from("#page3", {
    y: 70,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "30% 80%",
      end: "30% 65%",
      scrub: 4,
      // markers:true
    },
  });
  gsap.from("#page3 h3", {
    y: 150,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "30% 80%",
      end: "30% 65%",
      scrub: 4,
      // markers:true
    },
  });
}
page3animation();

function page4animation() {
  gsap.from("#page4 h1", {
    y: 150,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "8% 90%",
      end: "8% 75%",
      scrub: 4,
      // markers:true
    },
  });
  gsap.from("#page4 h3", {
    y: 150,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "8% 90%",
      end: "8% 75%",
      scrub: 4,
      // markers:true
    },
  });
}
page4animation();
function page5animation() {
  gsap.from("#page5 h1", {
    y: 150,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "15% 80%",
      end: "15% 65%",
      scrub: 4,
      // markers:true
    },
  });
  gsap.from("#page5 h3", {
    y: 150,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "15% 80%",
      end: "15% 65%",
      scrub: 4,
      // markers:true
    },
  });
  document.addEventListener("mousemove", (e) => {
    const image = document.getElementById("vr-img4");
    const { clientX, clientY } = e;

    // Get the width and height of the image
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;

    // Get the width and height of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate the percentage position of the cursor relative to the window
    const percentageX = (clientX / windowWidth) * 100;
    const percentageY = (clientY / windowHeight) * 100;

    // Calculate the new position of the image
    const offsetX = (percentageX - 50) * 0.05; // Adjust 0.05 for slower rate
    const offsetY = (percentageY - 50) * 0.05; // Adjust 0.05 for slower rate

    // Apply the transformation to the image
    image.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
  });
}
page5animation();

function thirdAnim() {
  document.querySelectorAll(".listitem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelectorAll(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
thirdAnim();

function footerAnim() {
  gsap.from("#footer3 h1", {
    y: -200,
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "65% 80%",
      end: "65% 65%",
      scrub: 4,
      // markers:true
    },
  });
  gsap.from("#footer1 a", {
    opacity: 0,
    stagger: 0,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "15% 80%",
      end: "15% 65%",
      scrub: 4,
      // markers:true
    },
  });
  gsap.from("#footer1 h1", {
    y: 80,
    opacity: 0,
    stagger: 0,
    duration: 0.4,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "15% 80%",
      end: "15% 65%",
      scrub: 4,
      // markers:true
    },
  });
  gsap.from("#footer2 p", {
    opacity: 0,
    stagger: 0,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "15% 80%",
      end: "15% 65%",
      scrub: 4,
      // markers:true
    },
  });
  gsap.from("#footer2 h3", {
    y: 80,
    opacity: 0,
    stagger: 0,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "15% 80%",
      end: "15% 65%",
      scrub: 4,
      // markers:true
    },
  });
}
footerAnim();

function sliderAnimation(){
  document.addEventListener("DOMContentLoaded", function () {
    var sliders = document.querySelectorAll(".slide");
    var container = document.getElementById('slider-content');

    function updatePositions() {
        sliders.forEach(slide => slide.className = 'slide position-none');

        if (sliders.length >= 3) {
            var positions = ['position-1', 'position-2', 'position-3', 'position-4'];

            sliders.forEach((slide, index) => {
                let positionIndex = (index - center + sliders.length) % sliders.length;
                slide.classList.add(positions[positionIndex + 1]);
            });
        }
    }

    function updateIndexes(direction) {
        leftEnd = updateIndex(leftEnd, direction);
        center = updateIndex(center, direction);
        rightEnd = updateIndex(rightEnd, direction);
    }

    function updateIndex(index, direction) {
        if (index !== undefined) {
            index += direction;
            if (index < 0) index = sliders.length - 1;
            if (index >= sliders.length) index = 0;
        }
        return index;
    }

    function leftScroll() {
        updateIndexes(-1);
        updatePositions();
    }

    function rightScroll() {
        updateIndexes(1);
        updatePositions();
    }

    class Swipe {
        constructor(element) {
            this.xDown = null;
            this.yDown = null;
            this.element = typeof (element) === 'string' ? document.querySelector(element) : element;

            this.element.addEventListener('touchstart', function (evt) {
                this.xDown = evt.touches[0].clientX;
                this.yDown = evt.touches[0].clientY;
            }.bind(this), false);
        }

        onLeft(callback) {
            this.onLeftCallback = callback;
            return this;
        }

        onRight(callback) {
            this.onRightCallback = callback;
            return this;
        }

        handleTouchMove(evt) {
            if (!this.xDown || !this.yDown) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            this.xDiff = this.xDown - xUp;
            this.yDiff = this.yDown - yUp;

            if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
                if (this.xDiff > 0) {
                    this.onLeftCallback();
                } else {
                    this.onRightCallback();
                }
            }

            this.xDown = null;
            this.yDown = null;
        }

        run() {
            this.element.addEventListener('touchmove', function (evt) {
                this.handleTouchMove(evt);
            }.bind(this), false);
        }
    }

    var swiper = new Swipe(container);

    // Initial setup
    var center = Math.floor(sliders.length / 2);
    var leftEnd = center - 1 >= 0 ? center - 1 : sliders.length - 1;
    var rightEnd = center + 1 < sliders.length ? center + 1 : 0;

    // Add initial positions
    updatePositions();

    // Left scroll
    document.querySelector(".left-arrow").addEventListener("click", leftScroll);
    swiper.onRight(leftScroll).run();

    // Right scroll
    document.querySelector(".right-arrow").addEventListener("click", rightScroll);
    swiper.onLeft(rightScroll).run();
});

}

sliderAnimation()