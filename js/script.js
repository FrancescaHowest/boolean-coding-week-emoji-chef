"use strict";
// Variables
let divLoader, divModal, divModelContent, divModalClose;
let imgModalImage;



window.addEventListener("load", initialize);

function initialize() {
    // Get the DOM elements
    divLoader = document.querySelector(".loading");
    divModal = document.querySelector(".modal");
    divModelContent = document.querySelector(".modal-content");
    divModalClose = document.querySelector(".modal-close");
    imgModalImage = document.querySelector(".modal-image");


    // Add event listeners
    divModalClose.addEventListener("click", function() {
        divModal.classList.add("hidden")
    })
    
    // Initialize the variables
    //divLoader.classList.remove("hidden");
    console.log(divLoader);

}