// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form
    const contactForm = document.querySelector('form');

    // Add an event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[type="text"]:nth-child(2)').value;
        const message = contactForm.querySelector('textarea').value;

        // Display a confirmation message (you could also send this to a server)
        alert(`Thank you, ${name}! Your message has been sent.\nSubject: ${subject}\nEmail: ${email}\nMessage: ${message}`);

        // Clear the form fields
        contactForm.reset();
    });

    // Add smooth scrolling to internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Smooth scroll to the target element
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
