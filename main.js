// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  const errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden');
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener('click', function() {
      if (!heart.classList.contains('activated-heart')) {
        mimicServerCall()
          .then(() => {
            heart.classList.add('activated-heart');
            heart.textContent = FULL_HEART;
          })
          .catch(error => {
            errorModal.textContent = error;
            errorModal.classList.remove('hidden');
            setTimeout(() => {
              errorModal.classList.add('hidden');
            }, 3000);
          });
      } else {
        heart.classList.remove('activated-heart');
        heart.textContent = EMPTY_HEART;
      }
    });
  });
});

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
