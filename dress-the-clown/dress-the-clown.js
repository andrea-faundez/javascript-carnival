// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let clothingIndex = 0 // keeps track of wich part of the clown we are changing
let indexes = [0, 0, 0] // this array contains the former headIndex, bodyIndex and shoesIndex and keeps track of them

const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')

let imgs = [head, body, shoes] // created to change the right image in the changeHorizaontal function
let strings = ['head', 'body', 'shoes'] //created to call the right image in the changeHorizontal function

function changeHorizontal(shift) {
  let index = indexes[clothingIndex] // [clothingIndex] with this trick we ensure that the function has the same number in all of its parts
  let image = imgs[clothingIndex]
  let str = strings[clothingIndex]

  index += shift // shift will be determined by the eventListener ketdown arrow that we press (-1 or 1)

  if (index < 0) index = 5

  if (index > 5) index = 0

  indexes[clothingIndex] = index // makes the changes applicable to the original indexes and clothingIndex variables

  image.src = './images/' + str + index + '.png'
}

function changeVertical(shift) {
  clothingIndex += shift // shift will be determined by the eventListener ketdown arrow that we press (-1 or 1)
  if (clothingIndex > 2) clothingIndex = 0
  if (clothingIndex < 0) clothingIndex = 2
}

window.addEventListener('keydown', function (event) {
  const key = event.code
  switch (event.code) {
    case 'ArrowUp':
      changeVertical(-1)
      break
    case 'ArrowDown':
      changeVertical(1)
      break
    case 'ArrowRight':
      changeHorizontal(-1)
      break
    case 'ArrowLeft':
      changeHorizontal(1)
      break
  }
})
