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
    end: "top 0%",
    // markers: true,
    scrub: 1,
  },
});
