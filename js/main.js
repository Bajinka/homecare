// Main JavaScript for Born to Excel PLLC

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Check if staff is logged in and redirect if accessing dashboard without login
function checkStaffAuth() {
    const currentStaff = JSON.parse(localStorage.getItem('currentStaff'));
    if (window.location.pathname.includes('dashboard.html') && !currentStaff) {
        window.location.href = 'staff-login.html';
    }
}

// Run auth check on page load
document.addEventListener('DOMContentLoaded', checkStaffAuth);