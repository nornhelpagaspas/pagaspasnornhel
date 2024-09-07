<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="style.css">
    <title>GhsotAce Saint</title>
</head>
<body>
    <nav>
        <div class="nav-container">
            <div class="logo" data-aos="zoom-in" data-aos-duration="1500">
                Ghost <span>Ace</span>
            </div>
            <div class="links">
                <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300"><a href="Gamer.html">Home</a></div>
                <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"><a href="videos.html">Videos</a></div>
                <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500"><a href="Comment.html">Comments</a></div>
        </div>
        <i class="fa-solid fa-bars hamburg" onclick="hamburg()"></i>
    </div>
        <div class="dropdown">
            <div class="links">
                <a href="Gamer.html">Home</a>
                <a href="videos.html">Videos</a>
                <a href="Comment.html">Comments</a>
                <i class="fa-solid fa-xmark cancel" onclick="cancel()"></i>
            </div>
        </div>
    </nav>
    <section>
        <div class="main-container">
            <div class="image" data-aos="zoom-out" data-aos-duration="3000">
                <img src="C:\Users\LENOVO\Pictures\Fondo Ghost Legendario.jpg" alt="">
            </div>
            <div class="content">
                <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">Soon To Become</h1>
                <div class="typewriter" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900"><span class="typewriter-text"></span><label for="">|</label></div>
                <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">Hellow i'm GhostAce an dedicated gamer who plays 
                    every day with the goal of becoming a well-known name in the gaming world. With a passion for competitive play and 
                    a drive to succeed, I strives to improve skills, build a fanbase, and achieve gaming fame.
                    Understanding that success in gaming isn't just about play, I currently studying Information Technology (IT) to gain
                    more knowledge in areas like video editing, programming, Game Creator and content creator. This expertise will help 
                    create engaging content, build custom mods, and navigate the technical side of gaming to stand out in the industry.                   
                    I'm determined to combine gaming talent with tech skills to rise to the top and become a recognized figure in the 
                    gaming community.</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/me/" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1400"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.tiktok.com/@3ghostace3?is_from_webapp=1&sender_device=pc" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="http://www.youtube.com/@Ghost-Ace35" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1600"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <footer>&copy;GhostAce Saint</footer>
    </section>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init({offset:0});
    </script>
    <script src="script.js"></script>
</body>
</html>


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

*{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

body{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: black;
}

nav{
    width: 100%;
    height: 10vh;
    position: sticky;
}

.nav-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.logo{
    color: white;
    font-size: 2rem;
    font-weight: bold;
}

.logo span{
    color: #039aff;
    text-shadow: 0 0 10px #039aff;
}

.hamburg,
.cancel{
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 10px;
    color: white;
    display: none;
    font-size: clamp(2.5rem, 0.5rem + 5vw, 3rem);
}

.nav-container .links{
    display: flex;
}

.nav-container .links a{
    position: relative;
    font-size: 1.2rem;
    color: white;
    margin: 0 20px;
    text-decoration: none;
    font-weight: 550;
    transition: 0.3s linear;
}

.nav-container .links a::before{
    position: absolute;
    content: "";
    bottom: -3px;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: #039aff;
    transition: 0.2s linear;
}

.nav-container .links a:hover::before{
    width: 100%;
}

.nav-container .links a:hover{
    color: #039aff;
}

.dropdown{
    z-index: 100;
    position: absolute;
    top: 0;
    transform: translateY(-500px);
    width: 100%;
    height: auto;
    backdrop-filter: blur(4px) brightness(40%);
    box-shadow:  0 0 20px black;
    transition: 0.2s linear;
}

.dropdown .links a{
    display: flex;
    color: white;
    text-decoration: none;
    justify-content: center;
    padding: 15px 0;
    align-items: center;
    transition: 0.2s linear;
}

.dropdown .links a:hover{
    background-color: #039aff;
}

section{
    width: 100%;
    height: 90vh;
}

.main-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.main-container .image{
    width: 500px;
    height: 80vh;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 0 50px #039aff;
}

.main-container .image img{
    width: 100%;

}

.main-container .image:hover{
    animation: animate 1.5s ease-in-out infinite;
}

@keyframes animate {
    0%{
        scale: 1;
    }
    
    50%{
        scale: 1.05;
    }
    
    100%{
        scale: 1;
    }
}

.main-container .content{
    color: white;
    width: 40%;
    min-height: 100px;
}

.content h1{
    font-size: clamp(1rem, 1rem + 5vw, 1.8rem);
}

.content h1 span{
    color: #039aff;
    text-shadow: 0  0 10px #039aff;
}

.content .typewriter{
    font-size: clamp(1rem, 1rem + 5vw, 2.5rem);
    font-weight: 600;
}

.content .typewriter-text{
    color: #039aff;
    text-shadow: 0 0 10px #039aff;
}

.content p{
    font-size: clamp(0.4rem , 0.2rem + 9vw, 1rem);
    margin: 10px 0;
}

.social-links i{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: 0.2rem solid #039aff;
    border-radius: 50%;
    color: #039aff;
    margin: 5px 15px;
    font-size: 1.5rem;
    transition: 0.2s linear;
}

.social-links i:hover{
    scale: 1.3;
    color: black;
    background-color: #039aff;
    filter: drop-shadow(0 0 10px #039aff);
}
footer {
    background: black;
    color: #039aff;
    font-size: 15px;
    text-align: center;
    font-family: verdana;
    padding: 10px;
    height: auto; 
    position: fixed; 
    left: 0;
    bottom: 0;
    width: 100%;
}
@media (max-width:884px) {
    nav .logo{
        position: absolute;
        top: 16px;
        left: 15px;
        font-size: 1.5rem;
    }

    .main-container {
        display: flex;
        flex-direction: column;
    }

    .nav-container .links{
        display: none;
    }

    .hamburg,
    .cancel{
        display: block;
    }

    .main-container .content{
        width: 80%;
    }

    .social-links i{
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.5rem;
    }

    .main-container .image{
        z-index: -1;
        width: 50%;
        height: 60%;
    }
}

@media (max-width:500px){
    .main-container .image{
        width: 50%;
        height: 60%;
        margin-bottom: 0px;
    }

    .main-container .content{
        width: 80%;
    }

    .main-container button{
        margin-top: 15px;
    }
}
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
const texts = [
    "Aspiring Gamer",
    "Popular Gamer",
    "Game Creator",
    "Content Creator",
    "youtuber"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="style.css">
    <title>GhsotAce Saint</title>
    <style>
      .video-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        overflow-y: auto;
        max-height: 600px;
        padding: 10px;
      }
      
      .video-grid-item {
        background-color: #f7f7f7;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 10px;
        cursor: pointer;

      }
      
      .video-grid-item:hover {
        background-color: #eee;
      }
    </style>
</head>
<body>
    <nav>
      <div class="nav-container">
        <div class="logo" data-aos="zoom-in" data-aos-duration="1500">
            Ghost <span>Ace</span>
        </div>
        <div class="links">
            <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300"><a href="Gamer.html">Home</a></div>
            <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"><a href="videos.html">Videos</a></div>
            <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500"><a href="Comment.html">Comments</a></div>
    </div>
    <i class="fa-solid fa-bars hamburg" onclick="hamburg()"></i>
</div>
    <div class="dropdown">
        <div class="links">
            <a href="Gamer.html">Home</a>
            <a href="videos.html">Videos</a>
            <a href="Comment.html">Comments</a>
            <i class="fa-solid fa-xmark cancel" onclick="cancel()"></i>
        </div>
    </div>
    </nav>
    <section class="video-grid">
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
        <video width="100%" height="100%" controls>
          <source src="Dying Light 2024-08-19 17-14-44.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <video width="100%" height="100%" controls>
          <source src="Dying Light 2024-08-19 17-43-32.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <video width="100%" height="100%" controls>
          <source src="VALORANT   2024-08-30 20-20-37.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <video width="100%" height="100%" controls>
          <source src="VALORANT   2024-09-02 22-08-18.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        <video width="100%" height="100%" controls>
          <source src="VALORANT   2024-09-02 22-29-18.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1100">
        <video width="100%" height="100%" controls>
          <source src="Wuthering Waves   2024-09-02 09-26-50.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <video width="100%" height="100%" controls>
          <source src="Wuthering Waves   2024-05-27 20-38-23.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <video width="100%" height="100%" controls>
          <source src="Wuthering Waves   2024-08-31 14-03-21.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-grid-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <video width="100%" height="100%" controls>
          <source src="Wuthering Waves   2024-09-02 09-21-59.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    <footer>&copy;GhostAce Saint</footer>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init({offset:0});
    </script>
    <script src="videos.js"></script>
</body>
</html>

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
const texts = [
    "Aspiring Gamer",
    "Popular Gamer",
    "Game Creator",
    "Content Creator",
    "youtuber"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="style.css">
    <title>GhsotAce Saint</title>
    <style>
        body {
            background-color: #000;
        }
        .comment-form {
            max-width: 500px;
            margin: 40px auto;
            padding: 20px;
            background-color: #000;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #87CEEB;
        }
        .comment-form label, .comment-form input, .comment-form textarea {
            color: #87CEEB; 
        }
        .comment-form input[type="text"], .comment-form input[type="email"], .comment-form textarea {
            color: #000;
        }
        .comment-form input[type="submit"] {
            background-color: #87CEEB;
            color: #000;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        .comment-form input[type="submit"]:hover {
            background-color: #66CCCC
        }
    </style>
</head>
<body>
    <nav>
        <nav>
            <div class="nav-container">
              <div class="logo" data-aos="zoom-in" data-aos-duration="1500">
                  Ghost <span>Ace</span>
              </div>
              <div class="links">
                  <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300"><a href="Gamer.html">Home</a></div>
                  <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"><a href="videos.html">Videos</a></div>
                  <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500"><a href="Comment.html">Comments</a></div>
          </div>
          <i class="fa-solid fa-bars hamburg" onclick="hamburg()"></i>
      </div>
          <div class="dropdown">
              <div class="links">
                  <a href="Gamer.html">Home</a>
                  <a href="videos.html">Videos</a>
                  <a href="Comment.html">Comments</a>
                  <i class="fa-solid fa-xmark cancel" onclick="cancel()"></i>
              </div>
          </div>
    <div class="comment-form">
        <h2 style="color: #87CEEB;">Leave a comment about my videos!</h2>
        <form id="comment-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" style="color: #000;"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" style="color: #000;"><br><br>
            <label for="comment">Comment:</label>
            <textarea id="comment" name="comment" style="color: #000;"></textarea><br><br>
            <label for="send-to">Send to:</label>
            <select id="send-to" name="send-to">
                <option value="gmail">Gmail</option>
                <option value="facebook">Facebook</option>
            </select><br><br>
            <input type="submit" value="Send Comment">
        </form>
    </div>
    <footer style="color: #87CEEB;">&copy;GhostAce Saint</footer>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init({offset:0});
      </script>
      <script src="comment.js"></script>
    <script>

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

