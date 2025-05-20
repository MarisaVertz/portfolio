function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
  const target = document.getElementById(sectionId);
  if (target) {
    target.style.display = "block";
  }

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
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.text();
    })
    .then((html) => {
      lightboxBody.innerHTML = html;
      lightbox.style.display = "flex";
      console.log(`${url} HTML injected.`);

      const projectName = url.split('/').pop().replace('.html', '');
      const scriptPath = `./public/js/${projectName}.js`;

      const script = document.createElement("script");
      script.src = scriptPath;
      script.onload = () => {
        console.log(`✅ ${projectName}.js loaded and executed.`);
       
      };

      lightboxBody.appendChild(script);
    })
    .catch((err) => {
      console.error("Failed to load project:", err);
      lightboxBody.innerHTML = `<p style="color: red;">Failed to load project. Please try again later.</p>`;
    });
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxBody = document.getElementById("lightbox-body");

  lightbox.style.display = "none";
  lightboxBody.innerHTML = "";

  restoreNavbar(); 
}

window.addEventListener("click", function (e) {
  const lightbox = document.getElementById("lightbox");
  if (e.target === lightbox) {
    closeLightbox();
  }
});

function restoreNavbar() {
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    const sectionId = link.getAttribute("data-section");
    if (sectionId) {
      link.onclick = (e) => {
        e.preventDefault();
        showSection(sectionId);
      };
    }
  });
}


window.addEventListener("DOMContentLoaded", () => {
  showSection("home");
  restoreNavbar();
});