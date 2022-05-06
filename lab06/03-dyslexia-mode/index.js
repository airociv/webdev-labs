/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const dysMode = () => {
  document.body.classList.add("dyslexia-mode")
};

document.querySelector("#dyslexia-toggle").addEventListener('click', dysMode);