

function loaderAnim() {
    var tl = gsap.timeline()
    tl.from("#page1-content h1 span",{
        y:100,
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-0.2
    })
    tl.from("#page1-content p",{
        opacity:0,
    })
    tl.from("#nav", {
        opacity: 0,
    })
}
loaderAnim()

function cursorEffect() {
    var cursor = document.querySelector("#cursur");
  
    // Attach event listener to the entire document
    document.addEventListener('mousemove', function(event) {
      gsap.to(cursor, {
        x: event.clientX,  // Use clientX and clientY for full page tracking
        y: event.clientY
      });
    });
  }
  
cursorEffect();

function navbarAnim(){
    var menuopen = document.querySelector("nav #menu")
    var menuclose = document.querySelector("nav2 #close")

    menuopen.addEventListener("click",function(){
        gsap.to("#nav2",{
            transform:'translateY(0vh)'
        })
        gsap.from("#nav2-right a",{
            y:100,
            opacity:0,
            stagger:0.1,
            delay:0.2

        })
        gsap.from("#nav3 p, #nav3 a ",{
            opacity:0,
            stagger:0.1,
            delay:0.5
        })
    })

    menuclose.addEventListener("click",function(){
        gsap.to("#nav2",{
            transform:'translateY(-100vh)'
        })
    })
}
navbarAnim()

function page2animation(){
    gsap.from("#page2 h1",{
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"20% 80%",
            end:"20% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from("#page2 h4",{
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"20% 80%",
            end:"20% 65%",
            scrub:4,
            // markers:true
        }
    })    
}
page2animation()

function page3animation(){
    gsap.from("#page3 h1",{
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"15% 80%",
            end:"15% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from("#page3 h3",{
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"15% 80%",
            end:"15% 65%",
            scrub:4,
            // markers:true
        }
    })    
}
page3animation()

function page4animation(){
    gsap.from("#page4 h1",{
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"40% 80%",
            end:"40% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from("#page4 h3",{
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"20% 80%",
            end:"20% 65%",
            scrub:4,
            // markers:true
        }
    })    
}
page4animation()
function page5animation(){
    gsap.from("#page5 h1",{
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            start:"20% 80%",
            end:"20% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from("#page5 h3",{
        y:150,
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            start:"20% 80%",
            end:"20% 65%",
            scrub:4,
            // markers:true
        }
    })    
    
}
page5animation()

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

function footerAnim(){
    gsap.from("#footer3 h1",{
        y:-200,
        opacity:0,
        stagger:0.1,
        duration:2,
        scrollTrigger:{
            trigger:"#footer",
            scroller:"#main",
            start:"65% 80%",
            end:"65% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from("#footer1 a",{
        opacity:0,
        stagger:0,
        scrollTrigger:{
            trigger:"#footer",
            scroller:"#main",
            start:"15% 80%",
            end:"15% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from("#footer1 h1",{
        y:80,
        opacity:0,
        stagger:0,
        duration:0.4,
        scrollTrigger:{
            trigger:"#footer",
            scroller:"#main",
            start:"15% 80%",
            end:"15% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from("#footer2 p",{
        opacity:0,
        stagger:0,
        scrollTrigger:{
            trigger:"#footer",
            scroller:"#main",
            start:"15% 80%",
            end:"15% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from("#footer2 h3",{
        y:80,
        opacity:0,
        stagger:0,
        scrollTrigger:{
            trigger:"#footer",
            scroller:"#main",
            start:"15% 80%",
            end:"15% 65%",
            scrub:4,
            // markers:true
        }
    })
    gsap.from(".footer-center h3",{
        opacity:0,
        stagger:0,
        scrollTrigger:{
            trigger:"#footer",
            scroller:"#main",
            start:"35% 80%",
            end:"35% 65%",
            scrub:4,
            // markers:true
        }
    })

}
footerAnim()