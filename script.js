/** Gäller initialerna i namnet */
const tl = new gsap.timeline();
const letters = [
    "#letter_m",  
    "#letter_l", 
];

letters.forEach((letter) => {
  tl.to(letter, { 
    duration: 1.5, 
    fill: "#E97C00",
    transformOrigin: "center center",
    rotation: 360
  });
});

/** Gäller cirkeln */
gsap.set("#cls-2-group_initials", { fill: "#000" }); //Sätter initial färg  
gsap.to("#cls-2-group_initials", { 
  duration: 5, 
  fill: "#E97C00",
  transformOrigin: "50% 50%", 
  rotation: 360, 
  repeat: -1, //Upprepa oändligt
  repeatDelay: 5
});

gsap.to('#cls-2-tagg-group', { 
  transformOrigin: "50% 50%", 
  rotation: "-=360", 
  duration: 10, 
  ease: "linear",
  repeat: -1,
  yoyo: true,
});