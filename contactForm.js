// Function to show the notification
function showNotification(message, duration) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.opacity = '1';

    // Hide after the specified duration
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500);
    }, duration);
}

// Add an event listener to the form submit event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const enquiry = document.getElementById('dropDown').value;
    const message = document.getElementById('subject').value;

    // Send email via EmailJS
    emailjs.send('service_qk3z7ry', 'template_yqja58r', {
        name: name,
        email: email,
        enquiry: enquiry,
        message: message
    }).then(function(response) {
        showNotification('Message sent successfully!', 1000);
        setTimeout(() => {
            window.location.href = '/'; 
        }, 2000);
    }, function(error) {
        showNotification('Failed to send message!', 2000);
    });
});