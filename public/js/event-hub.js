console.log("✅ Event Hub JavaScript Loaded and Executed");

function showSection(type) {
    console.log(`Switching to section: ${type}`);
    
    const homepage = document.getElementById('homepage');
    const upcoming = document.getElementById('upcoming-events');
    const past = document.getElementById('past-events');
    const buttons = document.querySelectorAll('nav button');
    const backToHomeButton = document.getElementById('back-to-home');

    if (!homepage || !upcoming || !past) {
        console.error("❌ Sections not found in the DOM.");
        return;
    }

    // 🔥 Hide all sections explicitly on every call
    homepage.style.display = 'none';
    upcoming.style.display = 'none';
    past.style.display = 'none';

    // Display the selected section
    if (type === 'upcoming') {
        upcoming.style.display = 'block';
        backToHomeButton.style.display = 'block';
    } else if (type === 'past') {
        past.style.display = 'block';
        backToHomeButton.style.display = 'block';
    } else {
        homepage.style.display = 'block';
        backToHomeButton.style.display = 'none';
    }

    // Handle active button styling
    buttons.forEach(button => button.classList.remove('active'));
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(type)) {
            button.classList.add('active');
        }
    });
}