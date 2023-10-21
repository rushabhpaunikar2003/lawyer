// client.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('lawyerForm');
    
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Collect form data
        const formData = new FormData(form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Data submitted successfully');
            } else {
                alert('Data submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting data');
        }
    });
});
