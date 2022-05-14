// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// changing the head
let clothingIndex = 0
let indexes = [0, 0, 0]

const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')

let imgs = [head, body, shoes]
let strings = ['head', 'body', 'shoes']

function changeHorizontal(shift) {
  let index = indexes[clothingIndex]
  let image = imgs[clothingIndex]
  let str = strings[clothingIndex]

  index += shift

  if (index < 0) index = 5

  if (index > 5) index = 0

  indexes[clothingIndex] = index

  image.src = './images/' + str + index + '.png'
}

function changeVertical(shift) {
  clothingIndex += shift
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
