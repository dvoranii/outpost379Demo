// Flickity carousels
function flick(el) {
  let carousel;

  function setCarousel() {
    el.classList.remove("-set");
    (carousel || this).resize();

    requestAnimationFrame(function () {
      el.classList.remove("-set");
    });
  }
  carousel = new Flickity(el, {
    cellAlign: "left",
    freeScroll: true,
    contain: true,
    resize: false,
    watchCSS: true,
  });

  window.addEventListener("resize", () => {
    setCarousel();
  });
}

let carousel1 = flick(document.querySelector(".carousel-1"));
let carousel2 = flick(document.querySelector(".carousel-2"));

// Modal
let closeBtn = document.querySelector(".btn-close");
let openBtn = document.querySelector(".cta");
let modal = document.querySelector(".modal");
let heroVid = document.querySelector("#hero-video");

openBtn.addEventListener("click", () => {
  modal.classList.add("display");
  player.play();
});

// Video player
// controls suddenly stopped showing, but still work...
let player = videojs(heroVid, {
  autoplay: true,
  poster: "https://picsum.photos/800/450",
  controls: true,
  loop: true,
  preload: "auto",
  plugins: {
    hotkeys: {
      enableModifiersForNumber: false,
      seekStep: 30,
    },
  },
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("display");
  player.pause();
  player.currentTime(0);
  player.trigger("loadstart");
});

// Text Animation
const heroTitle = document.querySelector(".hero-title");
const strTitle = heroTitle.textContent;
const splitText = strTitle.split("");
heroTitle.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  heroTitle.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = heroTitle.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
