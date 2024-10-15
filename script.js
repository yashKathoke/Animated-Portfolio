function followCircle() {
  let circle = document.getElementById("followcircle");

  let xprev = 0;
  let yprev = 0;
  let xscale = 0;
  let yscale = 0;
  let timer;

  window.addEventListener("mousemove", (e) => {
    clearTimeout(timer);

    xscale = gsap.utils.clamp(0.8, 1.2, e.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, e.clientY - yprev);

    xprev = e.clientX;
    yprev = e.clientY;

    circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`;

    timer = setTimeout(() => {
      circle.style.transform = `translate(${e.clientX - 10}px, ${
        e.clientY - 10
      }px) scale(1,1)`;
    }, 100);
  });

  window.addEventListener("mouseout", (e) => {
    let x = e.clientX - 10;
    let y = e.clientY - 10;
    circle.style.transform = `translate(${x}px, ${y}px)`;
    // circle.style.transform = "scale(0)";
  });

  window.addEventListener("mouseenter", (e) => {
    circle.style.transform = "scale(1)";
  });
}

const firstPageAnime = () => {
  let tl = gsap.timeline();

  tl.from("nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
  });

  tl.to(".boundingelem", {
    y: "0",
    duration: 2,
    delay: -1,
    stagger: 0.2,
    ease: "power2.out", // Use a more performant easing function
  });

  tl.from("#hero-footer", {
    y: "-10",
    duration: 1.5,
    opacity: 0,
    delay: -1,
    ease: "power2.out", // Use a more performant easing function
  });
};


function showImg() {
  let diffrot =0;
  let rot = 0;
  document.querySelectorAll(".elem").forEach((elem) => {

    // Make sure image becomes visible on mouseenter
    elem.addEventListener("mouseenter", (e) => {
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power2,
        duration: 0.5
      });
    });

    // Hide image only when leaving the element
    elem.addEventListener("mouseleave", (e) => {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power2,
        duration: 0.5
      });

      console.log('leave');
      
    });

    // Move the image as the mouse moves
    elem.addEventListener("mousemove", (e) => {
      let diff = e.clientY - elem.getBoundingClientRect().top;

      diffrot = e.clientX - rot;
      
      rot = e.clientX;
      
      gsap.to(elem.querySelector("img"), {
        opacity:1,
        top: diff,
        left: e.clientX,
        rotate: gsap.utils.clamp(-20,20, diffrot*.8),
        ease: Power3
      });
    });

  });
}



followCircle();
firstPageAnime();
showImg();

