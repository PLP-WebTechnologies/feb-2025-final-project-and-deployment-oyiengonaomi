        // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Newsletter Form Submission
        const newsletterForm = document.getElementById('newsletter-form');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Normally it is sent to a server but for now, it will just show an alert
            alert(`Thank you for subscribing with ${email}! You'll start receiving our delicious recipes soon.`);
            
            // Reset the form
            this.reset();
        });

        // Feature Recipe Cards - Dynamic Content Loading
        document.querySelectorAll('.recipe-card').forEach(card => {
            card.addEventListener('click', function() {
                const link = this.querySelector('.read-more').getAttribute('href');
                window.location.href = link;
            });
        });

        // Add animation to elements when they come into view
        function animateOnScroll() {
            const elements = document.querySelectorAll('.recipe-card, .category-item');
            
            elements.forEach(element => {
                const position = element.getBoundingClientRect();
                
                // Check if element is in viewport
                if(position.top < window.innerHeight && position.bottom >= 0) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Set initial state for animation
        document.querySelectorAll('.recipe-card, .category-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.transform = 'translateY(20px)';
        });

        // Run on page load
        window.addEventListener('load', animateOnScroll);
        
        // Run on scroll
        window.addEventListener('scroll', animateOnScroll);
