// Get that hamburger menu cookin' //

const musicFiles = [
  "././music/nhac1.mp3",
  "././music/nhac2.mp3",
  "././music/nhac3.mp3"
  // Add more music file paths as needed
];

window.onload = function() {
  
  playRandomMusic();
  // alert('Welcome to our Wedding. Click on Screen to continue.!');
};

function playRandomMusic() {
  const randomIndex = Math.floor(Math.random() * musicFiles.length);
  const randomMusic = musicFiles[randomIndex];
  alert('Welcome to our Wedding. Click on Screen to continue.!');
  // Set the source of the audio element to the randomly chosen music file
  const audioPlayer = document.getElementById('player');
  const musicSource = document.getElementById('musicSource');

  musicSource.setAttribute('src', randomMusic);
  audioPlayer.load(); // Reload the audio element to start playing the new music
  audioPlayer.play(); // Play the new music
  
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
  var audio = document.getElementById('player');
  // Add a click event listener to the document
  document.addEventListener("click", function () {
    audio.play(); // Play audio when the document is clicked
  });

});

function submitNameToGoogleForm(your_choice) {
  // Get the user's name through a prompt dialog
  let userName = null;
  let choice = '';
      
  if (your_choice == 1) {
      choice = "Xác nhận tham dự.";
      userName = prompt('Thật tuyệt khi bạn tham dự, hãy cho mình biết tên của bạn: ');
  } else {
      userName = prompt('Hẹn gặp lại bạn vào một ngày gần nhất, hãy cho mình biết tên của bạn: ');
      choice = "Không thể tham dự.";
  }
  // Check if the user entered a name and proceed if it's not empty
  if (userName !== null && userName.trim() !== '') {
      // Replace 'YOUR_FORM_ID' with the actual ID of your Google Form
      const formId = '1FAIpQLScvAXR-WNKKbZX6qcy19nidJnN43zj51jSsXRF4SYOIPWraIQ';
      
      // Replace 'entry.123456789' with the field ID of your form's input for the name
      const nameFieldId1 = 'entry.877086558'; // Join or not
      const nameFieldId2 = 'entry.1498135098'; // Name

      
      // Create an HTML form element
      const form = document.createElement('form');
      form.setAttribute('action', `https://docs.google.com/forms/d/e/${formId}/formResponse?submit=Submit&usp=pp_url`);
      form.setAttribute('method', 'POST');
      form.setAttribute('target', '_self'); // Open in the same window/tab
      
      // Create a hidden input field for the choice
      const choiceInput = document.createElement('input');
      choiceInput.setAttribute('type', 'text');
      choiceInput.setAttribute('name', nameFieldId1);
      choiceInput.setAttribute('value', choice);
      form.appendChild(choiceInput);
      
      // Create a hidden input field for the name
      const nameInput = document.createElement('input');
      nameInput.setAttribute('type', 'text');
      nameInput.setAttribute('name', nameFieldId2);
      nameInput.setAttribute('value', userName);
      form.appendChild(nameInput);
      
      // Append the form to the document body and submit it
      document.body.appendChild(form);
      form.submit();
  } else {
      // Handle the case where the user did not enter a name
      alert('Please enter a valid name.');
  }
}



// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function ($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function () {
  var Body = $("body");
  Body.addClass("preloader-site");
});
