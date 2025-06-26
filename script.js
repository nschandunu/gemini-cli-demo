const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav && navLinks) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}

navSlide();

document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    const menuContainer = document.querySelector('.menu-container');

    // Function to fetch and display menu items
    const showMenuItems = (category) => {
        fetch('menu.html')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const menuDoc = parser.parseFromString(data, 'text/html');
                const menuCards = menuDoc.querySelectorAll('.menu-card');
                
                menuContainer.innerHTML = ''; // Clear existing items

                menuCards.forEach(card => {
                    const cardCategory = card.querySelector('h2').textContent.toLowerCase();
                    if (category === 'all' || cardCategory.includes(category)) {
                        menuContainer.appendChild(card);
                    }
                });
            });
    };

    // Initially show all items
    showMenuItems('all');

    // Handle category clicks
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showMenuItems(category);
        });
    });
});

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}