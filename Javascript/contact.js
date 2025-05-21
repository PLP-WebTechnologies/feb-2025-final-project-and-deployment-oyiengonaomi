// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Gather form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const subscribeToNewsletter = document.getElementById('newsletter').checked;
            
            // In a real application, you would send this data to a server
            // For demo purposes, display a confirmation
            alert(`Thank you ${name}! Your message has been sent. We'll get back to you at ${email} as soon as possible.`);
            
            // Reset the form
            this.reset();
        });
    }
    
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Close other FAQ items (uncomment to enable this behavior)
            /*
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            */
        });
    });
    
    // Animation for contact info items
    const infoItems = document.querySelectorAll('.info-item');
    
    function animateInfoItems() {
        infoItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
    
    // Set initial state
    infoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transform = 'translateY(20px)';
    });
    
    // Trigger animation
    setTimeout(animateInfoItems, 300);
});