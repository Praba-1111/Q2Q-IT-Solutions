document.addEventListener('DOMContentLoaded', function() {
    const intakeForm = document.getElementById('intakeForm');
    const successMessage = document.getElementById('successMessage');

    if (intakeForm) {
        intakeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(intakeForm);
            
            // Optional: change button text to show loading state
            const submitBtn = intakeForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            // Replace 'YOUR_FORMSPREE_ENDPOINT' with the URL Formspree gives you
            // It will look something like: https://formspree.io/f/xbjvq...
            fetch('https://formspree.io/f/mnpjalva', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Hide the form and show the success message
                    intakeForm.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Scroll to top of the message
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Oops! There was a problem submitting your form");
                        }
                    });
                }
            })
            .catch(error => {
                alert("Oops! There was a problem submitting your form");
            })
            .finally(() => {
                // Reset the button state
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});
