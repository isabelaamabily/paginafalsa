/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


window.onload = function() {
    let images = document.querySelectorAll('.entrada img');
    let currentImage = 0;

    function showNextImage() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }

    images[currentImage].classList.add('active');
    setInterval(showNextImage, 5000); // Intervalo de 5 segundos
};

function togglePasswordVisibility() {
    const passwordField = document.getElementById("senha");
    const passwordToggle = document.querySelector(".toggle-password");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.textContent = "Ocultar"; // Alterna para "Ocultar"
    } else {
        passwordField.type = "password";
        passwordToggle.textContent = "Mostrar"; // Alterna para "Mostrar"
    }
}
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('#myForm input[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
            input.style.borderColor = 'red'; // Destaca campos não preenchidos
        } else {
            input.style.borderColor = ''; // Remove a cor da borda
        }
    });

    if (allFilled) {
        alert('Atenção: Você caiu em um golpe!\n\n' +
              '1. Antes de fornecer qualquer informação pessoal ou dados a qualquer site, verifique sempre a autenticidade da fonte.\n' +
              '2. Certifique-se de que o site é confiável e seguro.\n' +
              '3. Nunca compartilhe informações sensíveis, como senhas ou dados bancários, sem confirmar a legitimidade do site.\n' +
              '4. Proteja suas informações e evite fraudes.\n\n' +
              'Se tiver dúvidas sobre a segurança de um site, entre em contato com o suporte oficial ou consulte fontes confiáveis.');
    
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
