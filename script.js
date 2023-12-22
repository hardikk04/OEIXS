function lenisJs() {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 600);
  });

  gsap.ticker.lagSmoothing(0);
}
lenisJs();

const t1 = gsap.timeline();

t1.from(".page2>img", {
  width: "50%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2>img",
    start: "top 80%",
    end: "top -20%",
    // markers: true,
    scrub: 1,
  },
});

t1.from(".page3-box-elems", {
  onComplete: counter,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-box-elems",
    start: "top 80%",
    // markers: true,
  },
});

let projectCounter = 130;
let trainingCounter = 88;
let awardCounter = 10;
let indexCounter = 0;

function counter() {
  const myInterval = setInterval(() => {
    indexCounter++;
    if (indexCounter <= projectCounter) {
      document.querySelector(".project").innerHTML = indexCounter;
    }

    if (indexCounter <= trainingCounter) {
      document.querySelector(".training").innerHTML = indexCounter;
    }

    if (indexCounter <= awardCounter) {
      document.querySelector(".awards").innerHTML = indexCounter;
    }

    if (indexCounter > 130) {
      clearInterval(myInterval);
    }
  }, 50);
}
