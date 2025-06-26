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