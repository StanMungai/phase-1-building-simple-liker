// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal')
modal.classList.add('hidden')

const hearts = document.querySelectorAll('.like-glyph')

function likeButton(e) {
  const heart = e.target;
  // console.log(heart)
  mimicServerCall("bogusUrl")
    .then( () => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart"
      } else {
        heart.innerText = EMPTY_HEART
        heart.className = ""
      }
    })
    .catch( () => {
      // const modal = document.getElementById("modal")
      // modal.className = ""
      // modal.innerText = error;
      setTimeout(() => {
        modal.classList.remove('hidden')
        modal.innerText = error;
      }, 3000)
    })
}

for (const heart of hearts) {
  heart.addEventListener('click', likeButton)
}

// heart.addEventListener('click', () => {
//   mimicServerCall().then( resp => resp.json() )
//   .then( data => console.log(data) )
//   .catch( error => console.log(error.message) )

//   if (mimicServerCall()) {
//     mimicServerCall()
//     .then( (error) => error)
//     .catch( () => {
//       modal.classList.remove('hidden')
//     })
//   }
//   else {
//     heart.classList.add('activated-heart')
//   }
// })



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
