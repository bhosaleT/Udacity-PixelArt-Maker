//variable to get canvas element table.
const pixelCanvas = document.getElementById('pixelCanvas');

//variables to get the inputs from height and width.
let inputHeight = $("#inputHeight");
let inputWidth = $("#inputWidth");

//Picking the color from the html color-input dom element.
let pickedColor = $("#colorPicker");

//Submit button event listener to trigger the makeGrid function.
$('#inputSubmit').click(() => {
    event.preventDefault();
    makeGrid();
});


//To make the grid pattern makegrid is called whenever button is clicked.
function makeGrid() {
    pixelCanvas.innerHTML = '';
    let canvasHeight = inputHeight.val();
    let canvasWidth = inputWidth.val();

    //Adding an event listener to each block so that when clicked the color will be changed.
    for (let i = 0; i < canvasHeight; i++) {
        let row = pixelCanvas.insertRow(i);
        for (let j = 0; j < canvasWidth; j++) {
            let block = row.insertCell(j);
            block.addEventListener('click', ()=>{
                block.style.backgroundColor = pickedColor.val();
            });

        }
    }
}