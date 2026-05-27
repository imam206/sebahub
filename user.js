// User Panel JavaScript
function showUserSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.user-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Add active class to clicked nav item
    event.target.classList.add('active');
}

// Set profile as default
document.addEventListener('DOMContentLoaded', () => {
    const profile = document.getElementById('profile');
    if (profile) {
        profile.classList.add('active');
    }
    
    const firstNavItem = document.querySelector('.nav-item');
    if (firstNavItem) {
        firstNavItem.classList.add('active');
    }
});

// Handle form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Changes saved successfully!');
    });
});

// Handle button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.textContent.includes('Add to Cart')) {
            alert('Product added to cart!');
        } else if (button.textContent.includes('Remove')) {
            alert('Product removed from wishlist!');
        } else if (button.textContent.includes('Update Password')) {
            alert('Password updated successfully!');
        } else if (button.textContent.includes('Save')) {
            alert('Settings saved successfully!');
        } else if (button.textContent.includes('Delete Account')) {
            if (confirm('Are you sure? This action cannot be undone!')) {
                alert('Account deleted!');
            }
        }
    });
});
