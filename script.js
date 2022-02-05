const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight;
const percentage = document.querySelector(".percentage");

window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  const progress = Math.floor(parseInt(`${(scrollTop / height) * 100}%`), 10);
  percentage.innerText = `${progress}%`;
});
