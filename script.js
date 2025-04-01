'use strict';

// const emailBtn = document.querySelector('.mail--bar');
// let searchBox = document.querySelector('.search--box');
// const mailAlert = document.querySelector('.mail--alert');


// mailAlert.classList.add('hiddenTwo')

// // searchBox.textContent = "hello guys";
// emailBtn.addEventListener('click', function() {
//     // searchBox.textContent = 'anyanwud898@gmail.com';
    
//     if(searchBox.textContent === "" ){
//         console.log('not available');
//     }else{
//         console.log('welcome')
//     }
//     // console.log(searchBox.textContent);


// });
const formElement = document.getElementById('newsletter');

const emailInputElement = document.getElementById('email');

formElement.addEventListener('submit', () => {
  const formData = new FormData(this);

  // here you can either use the "this" keyword or just pass the "formElement" into it. the "this" keyword inside an event listener, references the element the event listener is attached to

  const email = formData.get('email');

  console.log(email);

  // you can follow the approach above or this one

  // const email = emailInputElement.value
});
