// 🎧 MUSIC CONTROL
const audio = document.querySelector(".audio-player");
const playBtn = document.querySelector(".btn-primary");

if (playBtn && audio) {
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "Pause Music ⏸";
    } else {
      audio.pause();
      playBtn.textContent = "Play Music ▶️";
    }
  });
}

// 🚀 SMOOTH SCROLL FOR NAV LINKS
const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ✨ SCROLL ANIMATION (FADE IN)
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// 🎯 BUTTON HOVER EFFECT (PREMIUM FEEL)
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

console.log("🔥 Trip Cee Premium Site Loaded");
