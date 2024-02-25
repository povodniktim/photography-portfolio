document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.target); // Log the observed element
      console.log(entry.isIntersecting); // Log whether the element is intersecting
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hide");
  hiddenElements.forEach((element) => observer.observe(element));

  // Adding scroll functionality after the page has loaded
  window.addEventListener("load", function () {
    const scrollButton = document.getElementById("scrollDownButton");
    const targetSection = document.getElementById("scrollBtnTarget"); // Replace 'targetSection' with the ID of your target section

    scrollButton.addEventListener("click", function () {
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
