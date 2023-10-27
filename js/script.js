const gridElem = document.querySelector(".grid");


// BUTTON
document.getElementById("my-button").addEventListener("click", ButtonClick);

function ButtonClick() {
    gridElem.innerHTML = '';

    const levelSelect = document.getElementById("level").value;

   

    for (let i = 1; i <= levelSelect; i++) {
        const curNumber = i;
         const cell = generateGridCell(curNumber);
        cell.addEventListener("click", function() {
           this.style.backgroundColor = "darkblue";
           console.log(curNumber);
        })
         gridElem.append(cell);

         if (levelSelect === "81" ) {
            cell.classList.add ("medium");
           }else if (levelSelect === "49") {
           cell.classList.add ("hard");
           }
       }
    
       

}

// FUNZIONI

/**
 * Genera una cella con un numero all'interno
 * @param {number} innerNumber
 * @returns {any} elemento cella
 */
function generateGridCell(innerNumber) {
  const newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.innerHTML = innerNumber;
  return newCell;
   
}
