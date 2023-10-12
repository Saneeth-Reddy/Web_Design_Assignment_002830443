// JavaScript for handling anchor links
document.addEventListener('DOMContentLoaded', function () {
    // Get all the "View Details" links
    var viewDetailsLinks = document.querySelectorAll('a[href^="#"]');
  
    // Handle click events on the links
    for (var i = 0; i < viewDetailsLinks.length; i++) {
      viewDetailsLinks[i].addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        var targetId = this.getAttribute('href').substring(1); // Get the target ID
  
        // Find the target element with the matching ID
        var targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Scroll to the target element
          targetElement.scrollIntoView({ behavior: 'smooth' });
  
          // Add a CSS class to highlight the target element
          targetElement.classList.add('highlight');
        }
      });
    }
  });
  