// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
// -------------------- A few things to add to the html file -----------------------
//onclick method: after googling A LOT, I saw that most people use the onclick method in the html file.
//1.- add onclik to the images in the html file, calling the function that will change the images.

//The second thing I notice is that most people use an id to apply the function to a certain element of the html file.
//2.- give each image in the html file an id.
//3.- use the id as the parameter of the function being called with onclick in each image.

// ------------------------------------- Java ---------------------------------------
//keep track of the unicorns.
//4.- Write an object that has the id in the html file as its properties. Their inital value is the number each unicor is currently at.
//    All of them star at 0 (0 clicks)

//Accesing the images. If the images are in an array I can refer to the array in my function.
//5.- Store the images in an array so I can pass them to the function.

//function that will be call onclick, that changes the images.
//    - check at what numer is the clicked unicorn at
//    - if it is at 3 (has 3 clicks alrady), the forth click will show an alert message
//    - if it is at any other number, the function will add 1 number to the unicorn and then,
//    - change the image: get element by id and change the sorce
//    - new sorce will be the array[i] after looping the array:
//      -> I didn't work :( it displays the last image with the first click and the message at the forth click
//    - [i] has to be the same number that the unicorn is currently at.
//    - skip the loop and replace i fo[object[imageid]]

//my object
let unicorns = {
  unicorn1: 0,
  unicorn2: 0,
  unicorn3: 0,
}

//function that changes the images.
function inflate(unicornId) {
  if (unicorns[unicornId] === 3) {
    alert('THANK YOU FELLA!')
  } else {
    unicorns[unicornId] = unicorns[unicornId] + 1
    console.log(unicornId + ' is at ballon level ' + unicorns[unicornId])
    document.getElementById(unicornId).src =
      './images/unicorn-' + unicorns[unicornId] + '.png'
  }
}
