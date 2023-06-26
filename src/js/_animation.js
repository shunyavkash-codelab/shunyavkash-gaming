
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { TextPlugin } from "gsap/TextPlugin";
  // import { SplitText } from "gsap/SplitText";
  // import { MotionPathHelper } from "gsap/MotionPathHelper";
    
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
  

  // locomotiveScroll
  // import LocomotiveScroll from 'locomotive-scroll';
  // const scroll = new LocomotiveScroll();

  // //full page smotth scroll
  // const locoScroll = new LocomotiveScroll({
  //   el: document.querySelector(".bodyscroll"),
  //   smooth: true
  // }); 
  
  
//logo animation
let tl = gsap.timeline({scrollTrigger:{
	trigger:".logo-text span",
  toggleActions: "restart none none none"
}})
.to(".logo-text span", {
  ease: "in",
  x: 0,
  opacity:1,
  delay: 1,
  stagger: 0.1,
})

// gsap.to(".logo-text span", {
//   scrollTrigger: {
//     trigger: ".logo-text span",
//     toggleActions: "restart none none none"
//   },
//   ease: "in",
//   x: 0,
//   opacity:1,
//   delay: 1,
//   stagger: 0.1,
// });

gsap.to(".logo svg", {
  scrollTrigger: {
    trigger: ".logo svg",
    toggleActions: "restart none none none"
  },
  ease: "in",
  scale: 1,
  opacity:1,
  delay: 0.5
});

//header dwonload button animation
gsap.to(".download-buttons a.block", {
  scrollTrigger: {
    trigger: ".download-buttons a.block",
    toggleActions: "restart none none none"
  },
  ease: "in",
  y: 0,
  opacity:1,
  duration: 1,
  delay: 1,
  stagger: 0.2,
});


//hero slider text animation
gsap.to(".hero-title-box span",{ 
  scrollTrigger: {
    trigger: ".hero-title-box span",
    toggleActions: "restart none none none",
  },
  text: "WEDNESDAY / Feb 2 @ 3PM",
  duration: 2,
  ease: "Power1.easeIn" 
});

gsap.to(".hero-title-box h1",{ 
  scrollTrigger: {
    trigger: ".hero-title-box h1",
    toggleActions: "restart none none none",
  },
  text: "NBA2K 22 PS4",
  duration: 2,
  ease: "Power1.easeIn" 
});


// brancd section text animation


gsap.to(".brand-section h2",{ 
  scrollTrigger: {
    trigger: ".brand-section h2",
    toggleActions: "restart none none none",
    start: "bottom 500px",
    end: "bottom 200px",
    scrub: 3,
  },
  text: "INSIDE THE GAME",
  duration: 2,
  ease: "Power1.easeIn" 
});


//hero slider title box animation
// gsap.to(".hero-title-box *", {
//   scrollTrigger: {
//     trigger: ".hero-title-box *",
//     toggleActions: "restart none none none"
//   },
//   ease: "in",
//   x: 0,
//   opacity:1,
//   delay: 2,
//   duration: 1,
//   stagger: 0.2,
// });

// gsap.to(".hero-usp-box", {
//   scrollTrigger: {
//     trigger: ".hero-usp-box",
//     toggleActions: "restart none none none"
//   },
//   ease: "in",
//   y: 0,
//   opacity:1,
//   delay: 2,
//   duration: 1,
//   stagger: 0.2,
// });

// shop overlay animation





