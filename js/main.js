'use strict'

const playButton = document.querySelector(".btn");
const select = document.querySelector(".form-select");
const container = document.querySelector(".block-container");

playButton.addEventListener("click", function(){
    const difficulty = parseInt(select.value);
    console.log(difficulty);


    let blockContainer = container;
    blockContainer.classList.replace("d-none", "d-flex");

    for (i = 1; i == difficulty; i++){
        let block = document.createElement("div");
        block.classList.add(".block");
        block.style.flexBasis = `calc(100% / ${Math.sqrt(difficulty)})`;
        blockContainer.append(block);
    }

    
});