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

  // Adding scroll functionality after the page has loaded
  window.addEventListener("load", function () {
    const scrollButton = document.getElementById("scrollDownButton");
    const targetSection = document.getElementById("scrollBtnTarget");

    scrollButton.addEventListener("click", function () {
      targetSection.scrollIntoView({ behavior: "smooth" });
    });

    // Adjust scroll behavior to navigate to the full page content
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
});
