const body = document.querySelector("body");
const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight;
const percentage = document.querySelector(".percentage");
const fontSelection = document.querySelectorAll(".font-selection");
const fontSelector = document.querySelector(".font-selector");
const fontBtn = document.querySelector(".font-selector-btn");

window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  const progress = Math.floor(parseInt(`${(scrollTop / height) * 100}%`), 10);
  percentage.innerText = `${progress}%`;
});

fontSelection.forEach((item) => {
  item.addEventListener("click", (e) => {
    const font = item.id;
    body.style.fontFamily = font;
  })
})

fontBtn.addEventListener('click', (e) => {
  fontSelector.classList.toggle("visible");
})

window.onscroll = function (e) {

  if (fontSelector.classList.contains('visible')) {
    fontBtn.classList.add("visible");
  } else if (this.oldScroll <= this.scrollY) {
    // percentage.classList.add("hidden");
    percentage.style.left = "-40";
    fontBtn.style.left = "-40";
    // fontBtn.classList.add("hidden");
  } else {
    percentage.classList.remove("hidden");
    percentage.style.left = "0";
    fontBtn.style.left = "-10";
  }

  // if(this.oldScroll <= this.scrollY) {
  //   percentage.classList.add("hidden");
  //   fontBtn.classList.add("hidden");
  // } else if (fontSelector.classList.contains('visible')) {
  //   fontBtn.classList.add("visible");
  // } else {
  //   percentage.classList.remove("hidden");
  //   fontBtn.classList.remove("hidden");
  // }
  this.oldScroll = this.scrollY;
}
