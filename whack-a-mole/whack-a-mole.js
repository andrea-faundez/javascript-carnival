// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
//The ability to store or get references to the cells in the HTML table:
// - The eassier for me is to create an array of cells with the getElementByTagName method

let cells = document.getElementsByTagName('TD')
console.log(cells)

//function to make mole disappear and appear somewhere else when clinked on the cell that has the mole:
// - create an img element
// - add src to the image element and adjust its width
// - get a random cell using Math.floor and Math.random like we did with the javascript-cafe
// - put the mole image in the chosen cell (appendChild method?)
// - make the mole disappear when the cell is clicked (shoould this be a different function called in this function)
// - make another mole appear when a mole disappers.

function mole() {
  let img = document.createElement('img')
  img.src = 'mole.PNG'
  img.width = '70'
  let cell = cells[Math.floor(Math.random() * cells.length)]
  cell = cell.appendChild(img)
  console.log(cell)
}

mole()
