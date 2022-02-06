const body = document.querySelector("body");
const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight;
const percentage = document.querySelector(".percentage");
const fontSelection = document.querySelectorAll(".font-selection");
const fontSelector = document.querySelector(".font-selector");
const fontBtn = document.querySelector(".font-selector-btn");
console.log(fontSelector);

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
  console.log("clicked");
  fontSelector.classList.toggle("visible");
})
