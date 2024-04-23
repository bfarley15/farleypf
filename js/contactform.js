<script>
    // Select the form element
    const form = document.getElementById('contactForm');

    // Event listener to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form data
        const formData = new FormData(form);
        
        // Perform any validation or processing here
        // Example: You can access the form data like this
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Example: Log the form data to the console
        console.log('Form Data:', {
            name: name,
            email: email,
            phone: phone,
            message: message
        });

        // You can now send this data to a server using AJAX or any other method
        
        // Optionally show a success message here
        const successMessage = document.getElementById('submitSuccessMessage');
        successMessage.classList.remove('d-none');
        
        // Clear the form fields
        form.reset();
    });
</script>