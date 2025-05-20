(() => {
  console.log("✅ Event Hub JavaScript Loaded and Executed");

  function showSection(type) {
    console.log(`Switching to section: ${type}`);

    const lightboxBody = document.getElementById("lightbox-body");

    const homepage = lightboxBody.querySelector('#eventhome'); // 🔁 was #homepage
    const upcoming = lightboxBody.querySelector('#upcoming-events');
    const past = lightboxBody.querySelector('#past-events');
    const buttons = lightboxBody.querySelectorAll('nav button');
    const backToHomeButton = lightboxBody.querySelector('#back-to-home');

    if (!homepage || !upcoming || !past) {
      console.error("❌ Sections not found in the DOM.");
      return;
    }

    homepage.style.display = 'none';
    upcoming.style.display = 'none';
    past.style.display = 'none';

    if (type === 'upcoming') {
      upcoming.style.display = 'block';
      if (backToHomeButton) backToHomeButton.style.display = 'block';
    } else if (type === 'past') {
      past.style.display = 'block';
      if (backToHomeButton) backToHomeButton.style.display = 'block';
    } else {
      homepage.style.display = 'block';
      if (backToHomeButton) backToHomeButton.style.display = 'none';
    }

    buttons.forEach(button => button.classList.remove('active'));
    buttons.forEach(button => {
      if (button.textContent.toLowerCase().includes(type)) {
        button.classList.add('active');
      }
    });
  }

  showSection('eventhome'); // 🔁 was 'home'

  const lightboxBody = document.getElementById("lightbox-body");
  const navButtons = lightboxBody.querySelectorAll('nav button');
  const backBtn = lightboxBody.querySelector('#back-to-home');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.textContent.toLowerCase();
      if (label.includes('upcoming')) showSection('upcoming');
      else if (label.includes('past')) showSection('past');
    });
  });

  if (backBtn) {
    backBtn.addEventListener('click', () => showSection('eventhome')); // 🔁 was 'home'
  }
})();