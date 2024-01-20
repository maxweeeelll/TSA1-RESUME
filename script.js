document.addEventListener("DOMContentLoaded", function () {
  const skillsButton = document.getElementById("skillsButton");
  const aboutButton = document.getElementById("aboutButton");
  const softwareButton = document.getElementById("softwareButton");
  const educationButton = document.getElementById("educationButton");
  const certifButton = document.getElementById("certifButton");

  skillsButton.addEventListener("click", function () {
      skillsButton.classList.toggle("clicked");
  });

  aboutButton.addEventListener("click", function () {
      aboutButton.classList.toggle("clicked");
  });

  softwareButton.addEventListener("click", function () {
      softwareButton.classList.toggle("clicked");
  });

  educationButton.addEventListener("click", function () {
      educationButton.classList.toggle("clicked");
  });

  certifButton.addEventListener("click", function () {
      certifButton.classList.toggle("clicked");
  });
});

function printpdf() {
  var content = document.getElementById("resume");
  // Implement your logic for printing PDF
}
