// Appointment booking functionality

document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };

            // Store appointment in localStorage (in real app, send to server)
            let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            appointments.push(formData);
            localStorage.setItem('appointments', JSON.stringify(appointments));

            // Show success message
            alert('Appointment booked successfully! We will send you a confirmation email shortly.');

            // Reset form
            appointmentForm.reset();

            // Note: In a real application, you would send this data to a server for processing
            // and email notifications would be handled server-side
        });
    }
});