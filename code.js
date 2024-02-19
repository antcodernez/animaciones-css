const bunnys = document.querySelectorAll(".box-bunny");
const score = document.querySelector(".score-value");
let scoreNumber = 0;

bunnys.forEach(bunny => {
    bunny.addEventListener("click", () => {
        
        if(scoreNumber == 10)
            {
                scoreNumber = 0; 
                alert("You win! :D");
                score.innerHTML = 0;
            }
        else
            {
                scoreNumber += 1;
                score.innerHTML = scoreNumber;
            }
            
    });
});
