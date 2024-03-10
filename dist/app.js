document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.target);
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hide");
  hiddenElements.forEach((element) => observer.observe(element));
});

const imageUrls = [
  "../dist/images/portraits/TamaraVogler_main.png",
  "../dist/images/commercial/Prime_main.png",
  "../dist/images/events/GuitarPlayer_main.jpg",
  "../dist/images/cars/AudiA4_main.jpg",
];

// Preload images
function preloadImages(urls) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Call the preloadImages function with the array of image URLs
preloadImages(imageUrls);
