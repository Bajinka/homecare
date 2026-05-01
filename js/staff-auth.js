// Staff authentication functionality

document.addEventListener('DOMContentLoaded', function() {
    const staffLoginForm = document.getElementById('staffLoginForm');
    const staffRegisterForm = document.getElementById('staffRegisterForm');

    // Login functionality
    if (staffLoginForm) {
        staffLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('staffEmail').value;
            const password = document.getElementById('staffPassword').value;
            const role = document.getElementById('staffRole').value;

            // Get staff from localStorage
            const staff = JSON.parse(localStorage.getItem('staff')) || [];

            // Find staff member
            const staffMember = staff.find(s => s.email === email && s.password === password && s.role === role);

            if (staffMember) {
                // Set current staff
                localStorage.setItem('currentStaff', JSON.stringify(staffMember));
                alert('Login successful!');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    // Registration functionality
    if (staffRegisterForm) {
        staffRegisterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const role = document.getElementById('registerRole').value;

            // Get existing staff
            let staff = JSON.parse(localStorage.getItem('staff')) || [];

            // Check if staff already exists
            const existingStaff = staff.find(s => s.email === email);
            if (existingStaff) {
                alert('Staff member with this email already exists.');
                return;
            }

            // Create new staff member
            const newStaff = {
                id: Date.now(),
                name: name,
                email: email,
                password: password,
                role: role,
                createdAt: new Date().toISOString()
            };

            staff.push(newStaff);
            localStorage.setItem('staff', JSON.stringify(staff));

            alert('Registration successful! Please login.');
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
            modal.hide();
        });
    }
});

// Show registration modal
function showRegisterModal() {
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    registerModal.show();
}