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

let img = document.createElement('img')
img.src = 'mole.PNG'
img.width = '70'

function mole() {
  let cell = cells[Math.floor(Math.random() * cells.length)]
  cell = cell.appendChild(img)
  console.log(cell)
}

mole()

// Meke the mole disappera:
// - addEventListener for when the image is clicked,
// - function to make the mole disappears when clicked on
// - make another mole appear when a mole disappers.

document.addEventListener('click', whackedMole)

function whackedMole(e) {
  if (e.target.tagName === 'IMG') {
    e.target.remove()
  }
}
