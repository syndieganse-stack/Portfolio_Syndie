document.addEventListener('DOMContentLoaded', function() {
    const formContact = document.getElementById('contactForm'); 
    const messageErreur = document.getElementById('messageErreur'); 
    
    if (formContact) { 
        formContact.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nomUtilisateur = document.getElementById('nom').value.trim(); 
            const messageUtilisateur = document.getElementById('message').value.trim(); 
            const emailUtilisateur = document.getElementById('email').value.trim(); 

            messageErreur.textContent = ''; 

            if (nomUtilisateur.length < 2) {
                messageErreur.textContent = 'Le nom est trop court, minimum 2 lettres SVP.';
                return; 
            }
            if (!emailUtilisateur.includes('@') || !emailUtilisateur.includes('.')) {
                messageErreur.textContent = 'Veuillez entrer une adresse e-mail valide (doit contenir "@" et un point).';
                return;
            }

            if (messageUtilisateur.length < 15) { 
                messageErreur.textContent = 'Votre message est un peu court, dites-nous en plus (minimum 15 caractères).';
                return;
            }
            alert('Super, ' + nomUtilisateur + ' ! Votre message a été envoyé avec succès. Je vous répondrai vite.');
            formContact.reset(); 
        });
    }
});