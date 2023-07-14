'use strict'

const playButton = document.querySelector(".btn");
const select = document.querySelector(".form-select");
const container = document.querySelector(".block-container");
const heading = document.querySelector(".heading");


playButton.addEventListener("click", function(){
    const difficulty = parseInt(select.value);
    console.log(difficulty);
    let scoreCount = heading;
    scoreCount.innerHTML = "";

    let blockContainer = container;
    blockContainer.classList.replace("d-none", "d-flex");
    blockContainer.innerHTML = "";

    let bombs = [];
    let score = [];
    let untoggleToggle = [];

    for (let b = 0; b < 16; b++){
        let rngBombs = (Math.floor(Math.random()*difficulty) + 1);
    
        if(bombs.indexOf(rngBombs) === -1){
            bombs.push(rngBombs);
        }
        else{
            b--
        }
    }
    console.log(bombs)


    for (let i = 1; i <= difficulty; i++){
        let block = document.createElement("div");
        block.classList.add("block", "d-flex", "align-items-center", "justify-content-center", "text-white");
        block.style.flexBasis = `calc(100% / ${Math.sqrt(difficulty)})`;
        blockContainer.append(block);

        if(bombs.indexOf(i) >= 0){
            block.dataset.isItABomb = "yeah";
        }

        block.addEventListener("click", function(){
            let untoggleToggleLength = untoggleToggle.length;
            if(untoggleToggleLength > 0){
                return;
            }

            block.classList.add("bg-success");
            block.innerHTML= (i);
            
            if(bombs.indexOf(i) >= 0){
                block.classList.replace("bg-success", "bg-danger");
                alert(`Hai perso.. \n\nIl punteggio da te raggiunto è: ${score.length}`);
                untoggleToggle.push("bombaaaaaaaaaa");

                let bombsLayed = document.querySelectorAll(`[data-is-it-a-bomb="yeah"]`);
                for(let i = 1; i < bombs.length; i++){
                    bombsLayed[i].classList.add("bg-danger");
                    bombsLayed[i].innerHTML = (i);
                }

                return;
            }

            score.push(1);
            scoreCount.classList.add("text-center", "fs-1", "fw-bold", "mb-5", "w-100");
            scoreCount.innerHTML = `Punteggio: ${score.length}`;
            console.log(score.length);
        });
    }
});


