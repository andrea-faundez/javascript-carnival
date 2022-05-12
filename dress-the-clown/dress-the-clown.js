// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// changing the head
let clothingIndex = 0
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

function changeClownHead() {
  let clownHead = document.getElementById('head')
  let headSrc = './images/head' + headIndex + '.png'
  if (headIndex >= 6) {
    headIndex = 0
  } else if (headIndex <= 0) {
    headIndex = 6
  } else {
    clownHead.src = headSrc
  }
}

function changeClownBody() {
  let clownBody = document.getElementById('body')
  let bodySrc = './images/body' + bodyIndex + '.png'
  if (bodyIndex >= 6) {
    bodyIndex = 0
  } else if (bodyIndex <= 0) {
    bodyIndex = 6
  } else {
    clownBody.src = bodySrc
  }
}

function changeClownShoes() {
  let clonwShoes = document.getElementById('shoes')
  let shoesSrc = './images/shoes' + shoesIndex + '.png'
  if (shoesIndex >= 6) {
    shoesIndex = 0
  } else if (shoesIndex <= 0) {
    shoesIndex = 6
  } else {
    clonwShoes.src = shoesSrc
  }
}

function bodyParts() {
  if (clothingIndex >= 2) {
    clothingIndex = 2
  } else if (clothingIndex <= 0) {
    clothingIndex = 0
  } else {
    clothingIndex
  }
}

window.addEventListener('keydown', function (event) {
  const key = event.code
  switch (event.code) {
    case 'ArrowUp':
      clothingIndex--
      break
    case 'ArrowDown':
      clothingIndex++
      break
    case 'ArrowRight':
      if (clothingIndex === 0) {
        headIndex++
        changeClownHead()
      } else if (clothingIndex === 1) {
        bodyIndex++
        changeClownBody()
      } else if (clothingIndex === 2) {
        shoesIndex++
        changeClownShoes()
      }
      break
    case 'ArrowLeft':
      if (clothingIndex === 0) {
        headIndex--
        changeClownHead()
      } else if (clothingIndex === 1) {
        bodyIndex--
        changeClownBody()
      } else if (clothingIndex === 2) {
        shoesIndex--
        changeClownShoes()
      }
      break
  }
})
