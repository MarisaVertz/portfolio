function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";

  if (sectionId === "projects") {
    document.body.classList.add("project-page");
  } else {
    document.body.classList.remove("project-page");
  }
}

function openProject(url) {
  const lightbox = document.getElementById("lightbox");
  const lightboxBody = document.getElementById("lightbox-body");

  lightboxBody.innerHTML = "";

  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      lightboxBody.innerHTML = html;
      lightbox.style.display = "flex";
    });
}

function openImageLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxBody = document.getElementById("lightbox-body");
  lightboxBody.innerHTML = "";

  const image = document.createElement("img");
  image.src = imageSrc;
  image.classList.add("lightbox-image");

  lightboxBody.appendChild(image);
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxBody = document.getElementById("lightbox-body");

  lightbox.style.display = "none";
  lightboxBody.innerHTML = "";
}

window.addEventListener("click", function (e) {
  const lightbox = document.getElementById("lightbox");
  if (e.target === lightbox) {
    closeLightbox();
  }
});


