function displayConfirmationMessage() {
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
   
    event.preventDefault();
    
    
    displayConfirmationMessage();
});