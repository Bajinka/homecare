// Authentication functionality

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Login functionality
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const role = document.getElementById('userRole').value;

            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Find user
            const user = users.find(u => u.email === email && u.password === password && u.role === role);

            if (user) {
                // Set current user
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert('Login successful!');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    // Registration functionality
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const role = document.getElementById('registerRole').value;

            // Get existing users
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Check if user already exists
            const existingUser = users.find(u => u.email === email);
            if (existingUser) {
                alert('User with this email already exists.');
                return;
            }

            // Create new user
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                password: password,
                role: role
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registration successful! Please login.');
            // Switch to login tab
            const loginTab = document.getElementById('login-tab');
            loginTab.click();
        });
    }
});