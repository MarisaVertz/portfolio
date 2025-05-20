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
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.text();
    })
    .then((html) => {
      lightboxBody.innerHTML = html;
      lightbox.style.display = "flex";
      console.log("Event Hub HTML injected.");

      // 🚀 Manually inject the script directly into the lightbox
      if (url.includes("event-hub.html")) {
        console.log("Injecting Event Hub script...");
        
        // Find the lightbox iframe's document
        const script = document.createElement("script");
        script.src = "./public/js/event-hub.js";
        script.onload = () => {
          console.log("✅ Event Hub script loaded and executed.");
          // 🔥 Manually trigger the initial state
          const homepage = document.getElementById('homepage');
          const upcoming = document.getElementById('upcoming-events');
          const past = document.getElementById('past-events');
          
          if (homepage && upcoming && past) {
              homepage.style.display = 'block';
              upcoming.style.display = 'none';
              past.style.display = 'none';
          }
        };
        
        // Append it to the lightbox DOM
        lightboxBody.appendChild(script);
      }
    })
    .catch((err) => {
      console.error("Failed to load project:", err);
      lightboxBody.innerHTML = `<p style="color: red;">Failed to load project. Please try again later.</p>`;
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

