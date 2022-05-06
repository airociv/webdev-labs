const makeBigger = () => {
   contentElement = document.querySelector(".content");
   computeFontSize = parseFloat(
      getComputedStyle(contentElement).getPropertyValue('font-size')
   )
   contentElement.style.fontSize =  computeFontSize + 2 + "px"


   contentElement = document.querySelector("h1");
   computeFontSize = parseFloat(
      getComputedStyle(contentElement).getPropertyValue('font-size')
   )
   contentElement.style.fontSize =  computeFontSize + 2 + "px"
};

const makeSmaller = () => {
   contentElement = document.querySelector(".content");
   computeFontSize = parseFloat(
      getComputedStyle(contentElement).getPropertyValue('font-size')
   )
   contentElement.style.fontSize =  computeFontSize - 2 + "px"


   contentElement = document.querySelector("h1");
   computeFontSize = parseFloat(
      getComputedStyle(contentElement).getPropertyValue('font-size')
   )
   contentElement.style.fontSize =  computeFontSize - 2 + "px"
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);