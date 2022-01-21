var matrix = []
const matrix_div = document.getElementById("matrix")
const box = matrix_div.childNodes
var blankIndices = []

//creates a null 9x9 matrix
function createMatrix(){
    for(let i = 0; i < 9; i++){
        matrix.push([null,null,null,null,null,null,null,null,null])
    }
}

//gives random values to the matrix
function assignRandomNum(matrix){
    for(let i = 0; i < 9; i++){ //row index
        for(let j = 0; j < 9; j++){ //column index
            matrix[i][j] = Math.floor(Math.random()*9)+1
        }
    }
    return matrix
}

/**-----------DOM RELATIONS-----------**/

//shows the empty matrix in the browser 
//by creating HTML divs for each cell
function showMatrix(){
    let bin = ``
    for(let n = 0; n < 9; n++){
        bin += `<div>`
        for(let i = 0; i < 9; i++){
            bin += `<div></div>`
        }
        bin += `</div>`
    }
    matrix_div.innerHTML = bin
}

//fills the cells with matrix values
function fillMatrix(matrix){
    let boxnTemp = 0 //which row the box starts / temp for box number
    let boxn //box number
    let i = 0 //i index of matrix value
    for(let outer = 0; outer < 3; outer++){
        let cnp = 0 //which row the cell starts
        let cn //child nth
        boxn = boxnTemp
        for(let outl = 0; outl < 3; outl++){
            cn = cnp
            let upLimit = 3
            let tempJ = 0
            for(let j = tempJ; j < upLimit; j++){
                box[boxn].childNodes[cn++].innerHTML = `<p>${matrix[i][j]}</p>`
            }
            boxn++
            cn = cnp
            upLimit += 3
            tempJ += 3
            for(let j = tempJ; j < upLimit; j++){
                box[boxn].childNodes[cn++].innerHTML = `<p>${matrix[i][j]}</p>`
            }
            boxn++
            cn = cnp
            upLimit += 3
            tempJ += 3
            for(let j = tempJ; j < upLimit; j++){
                box[boxn].childNodes[cn++].innerHTML = `<p>${matrix[i][j]}</p>`
            }
            if(cnp<9){
                cnp += 3
            } else cnp = 0
            boxn = boxnTemp
            i++ //onto the next row
        }
        boxnTemp += 3 //onto the next row of boxes
    }
}

//replaces the <p> with <input>
function hide(indx1, indx2){
    box[indx1].childNodes[indx2].childNodes[0].innerHTML = 
            `<input type="number" class="cellInp" min="1" max="9"/>`
}

function eraseCells(difficulty){ //replace the numbers with input fields
    let indx1
    let indx2
    let blanks
    function erase(blanks){ //erase random cells
        render()
        for(let i = 0; i < blanks; i++){
            indx1 = Math.floor(Math.random()*9)
            indx2 = Math.floor(Math.random()*9)
            blankIndices.push([indx1, indx2]) 
            hide(indx1, indx2)
        }
    }
    
    switch(difficulty){
        case 'hard':
            blanks = 58
            erase(blanks)
            break
        case 'easy':
            blanks = 37
            erase(blanks)
            break
    }
    
}

function render(){
    fillMatrix(assignRandomNum(matrix))
    console.table(matrix)
}

//if all inputs are complete, check if correct
function checkInput(){

}

/**-----------GAME LOGIC-----------**/

checkInput()
showMatrix()
createMatrix()
render()
console.table(matrix)
console.table("1111"+blankIndices)