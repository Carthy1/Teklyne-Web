// Toggle menu open
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('navbar').classList.add('active');
});

// Close menu
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('navbar').classList.remove('active');
});

// Contact form submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
});
