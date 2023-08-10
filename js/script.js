"use strict";
// Variables
const NUMBEROFBOWLS = 3;

let ingredients

let divIngredients, divBowls;

let divLoader, divModal, divModelContent, divModalClose;
let imgModalImage;



window.addEventListener("load", initialize);

function initialize() {
    // Get the DOM elements
    divIngredients = document.querySelector(".ingredients");
    divBowls = document.querySelector(".bowl");

    divLoader = document.querySelector(".loading");
    divModal = document.querySelector(".modal");
    divModelContent = document.querySelector(".modal-content");
    divModalClose = document.querySelector(".modal-close");
    imgModalImage = document.querySelector(".modal-image");


    // Add event listeners
    divModalClose.addEventListener("click", function() {
        divModal.classList.add("hidden")
    })

    // Initialize
    //divLoader.classList.remove("hidden");

    getJSONData();

    createBowls();
}

async function getJSONData() {
    fetch("https://francescahowest.github.io/boolean-coding-week-emoji-chef/api/data.json")
    .then(data => {
        ingredients = data;

        for (let ingredient in ingredients) {
            console.log(ingredient);
            //createIngredientTile(ingredient);
        }
    })
    .catch(error => console.log(error));
}

function createIngredientTile(ingredient) {{

}}

function createBowls() {
    for (let index = 0; index < NUMBEROFBOWLS; index++) {
        const divBowl = document.createElement("div");
        divBowl.classList.add("bowl-slot");
        divBowl.textContent = "?";

        divBowls.appendChild(divBowl);
    }
}