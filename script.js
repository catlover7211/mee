"use strict";

var _gsap = require("https://cdn.skypack.dev/gsap@3.12.0");

var _gsap2 = _interopRequireDefault(_gsap);

var _ScrollTrigger = require("https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!CSS.supports('animation-timeline: scroll()')) {
  _gsap2.default.registerPlugin(_ScrollTrigger.ScrollTrigger);
  console.clear();
  var scrub = 0.2;
  var name = document.querySelector("section:nth-of-type(1) svg");
  _gsap2.default.timeline().to(name, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: name.parentNode,
      scrub: scrub,
      start: "top top",
      end: "bottom top-=25%"
    },
    opacity: 1
  }).to(name, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: name.parentNode,
      scrub: scrub,
      start: "top top",
      end: "bottom top"
    },
    keyframes: {
      "0%": { background: "transparent" },
      "95%": { background: "transparent" },
      "100%": { z: "99vh", background: "black" }
    }
  }, 0);

  var p = document.querySelector("section:nth-of-type(2) p");
  _gsap2.default.timeline().to(p, {
    opacity: 1,
    immediateRender: false,
    scrollTrigger: {
      trigger: p.parentNode.parentNode,
      scrub: scrub,
      start: "top bottom",
      end: "top 50%"
    }
  }).to(p, {
    opacity: 0,
    immediateRender: false,
    scrollTrigger: {
      trigger: p.parentNode.parentNode,
      scrub: scrub,
      start: "bottom bottom",
      end: "bottom 50%"
    }
  });

  var video = document.querySelector(".video-wrap");
  _gsap2.default.timeline().to(video, {
    opacity: 1,
    immediateRender: false,
    scrollTrigger: {
      trigger: video.parentNode,
      scrub: scrub,
      start: "top bottom",
      end: "top 50%"
    }
  }).to(video, {
    opacity: 0,
    immediateRender: false,
    scrollTrigger: {
      trigger: video.parentNode,
      scrub: scrub,
      start: "bottom bottom",
      end: "bottom 50%"
    }
  });
  // Signature details
  _gsap2.default.to('.signature .head', {
    '--draw': 0,
    scrollTrigger: {
      trigger: 'section:last-of-type',
      scrub: scrub,
      start: 'top 50%',
      end: 'top 20%'
    }
  });
  _gsap2.default.to('.ear', {
    '--draw': 0,
    scrollTrigger: {
      trigger: 'section:last-of-type',
      scrub: scrub,
      start: 'top 20%',
      end: 'top 10%'
    }
  });
  _gsap2.default.to('.eye', {
    '--draw': 0,
    fill: 'black',
    scrollTrigger: {
      trigger: 'section:last-of-type',
      scrub: scrub,
      start: 'top 20%',
      end: 'top 10%'
    }
  });
  _gsap2.default.to('.nose', {
    '--draw': 0,
    fill: 'black',
    scrollTrigger: {
      trigger: 'section:last-of-type',
      scrub: scrub,
      start: 'top 10%',
      end: 'top top'
    }
  });
}
