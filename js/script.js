"use strict";
// Variables
const NUMBEROFBOWLS = 3;

let ingredients = [];

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
    .then(resp => resp.json())
    .then(data => {
        ingredients = data;

        console.log(ingredients);

        let foodTypes = [];

        for (let foodType in ingredients) {
            const options = ingredients[foodType]["Options"];

            if(Array.isArray(options)){
                options.forEach(element => {
                    createIngredientTile(element);
                    console.log(element.name);
                });
            }

            else
                createIngredientTile(options);
        }
    })
    .catch(error => console.log(error));
}

function createIngredientTile(ingredient) {{
    const divIngredientTile = document.createElement("div");

    divIngredientTile.classList.add("ingredient");
    divIngredientTile.textContent = ingredient.image;

    divIngredientTile.addEventListener("click", "addIngredient");

    divIngredients.appendChild(divIngredientTile);
}}

function createBowls() {
    for (let index = 0; index < NUMBEROFBOWLS; index++) {
        const divBowl = document.createElement("div");

        divBowl.classList.add("bowl-slot");
        divBowl.textContent = "?";

        divBowls.appendChild(divBowl);
    }
}