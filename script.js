// eslint-disable-next-line no-undef
const tl = new gsap.timeline();
const letters = [
    "#letter_m",  
    "#letter_l", 
];

letters.forEach((letter) => {
  tl.to(letter, { 
    duration: 1.5, 
    fill: "#C26700",
    transformOrigin: "center center",
    rotation: 360
  });
});

// eslint-disable-next-line no-undef
gsap.to('#logo', { 
  transformOrigin: "50% 50%", 
  rotation: 360, 
  duration: 3, 
  ease: "linear",
});