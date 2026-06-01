
// Scroll Animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

function hideLoader() {
  var loader = document.querySelector('.page-loader');
  if (loader) {
    loader.style.transition = 'opacity 0.4s ease';
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(function() {
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
    }, 500);
  }
}

// Ensure page becomes accessible after ~1.5s
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(hideLoader, 1500);
});

// Fallback: also hide when full load completes (if later)
window.addEventListener('load', function() {
  setTimeout(hideLoader, 1500);
});
