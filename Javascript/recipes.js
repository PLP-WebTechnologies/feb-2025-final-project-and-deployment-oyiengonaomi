// Recipe Filtering System
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    // Add click event to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            // Get the filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Show or hide recipe cards based on filter
            recipeCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-cuisine') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Animation for recipe cards
    function animateRecipeCards() {
        recipeCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
    
    // Set initial state for cards
    recipeCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transform = 'translateY(20px)';
    });
    
    // Trigger animation
    setTimeout(animateRecipeCards, 300);
    
    // Make recipe cards clickable
    recipeCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('.read-more').getAttribute('href');
            window.location.href = link;
        });
    });
});