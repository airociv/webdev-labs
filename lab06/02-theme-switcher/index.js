/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const def = () => {
   document.body.classList.remove("ocean")
   document.body.classList.remove("desert")
   document.body.classList.remove("high-contrast")
};

const ocean = () => {
   document.body.classList.remove("ocean")
   document.body.classList.remove("desert")
   document.body.classList.remove("high-contrast")
   document.body.classList.add("ocean")
};

const desert = () => {
   document.body.classList.remove("ocean")
   document.body.classList.remove("desert")
   document.body.classList.remove("high-contrast")
   document.body.classList.add("desert")
};

const highContrast = () => {
   document.body.classList.remove("ocean")
   document.body.classList.remove("desert")
   document.body.classList.remove("high-contrast")
   document.body.classList.add("high-contrast")
};

document.querySelector("#ocean").addEventListener('click', ocean);
document.querySelector("#default").addEventListener('click', def);
document.querySelector("#high-contrast").addEventListener('click', highContrast);
document.querySelector("#desert").addEventListener('click', desert);