// Contact form functionality

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                subject: document.getElementById('contactSubject').value,
                message: document.getElementById('contactMessage').value,
                timestamp: new Date().toISOString()
            };

            // Store message in localStorage (in real app, send to server)
            let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push(formData);
            localStorage.setItem('contactMessages', JSON.stringify(messages));

            // Show success message
            alert('Message sent successfully! We will get back to you soon.');

            // Reset form
            contactForm.reset();

            // Note: In a real application, you would send this data to a server for processing
        });
    }
});