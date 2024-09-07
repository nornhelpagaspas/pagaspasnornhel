const form = document.getElementById('comment-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;
  const sendTo = document.getElementById('send-to').value;

  if (name === '' || email === '' || comment === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (sendTo === 'gmail') {
    const gmailUrl = 'https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/u/1/%3FpageId%3Dnone&ec=GBRAwAE' + encodeURIComponent(email) + '&su=' + encodeURIComponent('Comment from ' + name) + '&body=' + encodeURIComponent(comment);
    window.open(gmailUrl, '_blank');
  }

  else if (sendTo === 'facebook') {
    const facebookUrl = 'https://www.facebook.com/me/';
    window.open(facebookUrl, '_blank');

  }
});

document.getElementById('send-to').addEventListener('change', (e) => {
  const sendTo = e.target.value;
  if (sendTo === 'gmail') {
    document.getElementById('email').placeholder = 'Enter Gmail address';
  } else if (sendTo === 'facebook') {
    document.getElementById('email').placeholder = 'Enter Facebook email address';
  }
});
function hamburg(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(0px)"
}

function cancel(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(-500px)"
}

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;