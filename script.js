document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
  
    // Fade in the logo after a short delay (you can adjust the delay as needed)
    setTimeout(() => {
      logo.style.opacity = "1";
    }, 1000);
  });

  function toggleMenu() {
    var menu = document.getElementById('navMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

// Add an event listener to each link in the navigation menu
var links = document.querySelectorAll('.navigation-menu a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    var menu = document.getElementById('navMenu');
    menu.style.display = 'none'; // Hide the menu when a link is clicked
  });
}

// TIMELINE
function showMovieInfo(film) {
  var movieDetails = document.getElementById(film + '-details');
  var allMovieDetails = document.querySelectorAll('.movie-details');

  // Hide all other movie details
  allMovieDetails.forEach(function (details) {
    details.style.display = 'none';
  });

  // Show the selected movie details
  movieDetails.style.display = 'block';
}

// FOOTERS
function openModal(imageUrl) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-image');

  // Set the image source and show the modal
  modalImage.src = imageUrl;
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal');

  // Hide the modal
  modal.style.display = 'none';
}