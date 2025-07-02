const form = document.getElementById('numeroForm');
        const messageDiv = document.getElementById('message');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const campoA = parseFloat(document.getElementById('campoA').value);
            const campoB = parseFloat(document.getElementById('campoB').value);
            
            if (campoB > campoA) {
                messageDiv.textContent = 'Formulário válido, Parabens!: Campo B é maior que o Campo A!';
                messageDiv.className = 'message valid';
            } else {
                messageDiv.textContent = 'Error: Formulário inválido: Campo B deve ser maior que o Campo A!';
                messageDiv.className = 'message invalid';
            }
        });