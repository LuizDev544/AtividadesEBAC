
        const form = document.getElementById('contatoForm');
        const contactTableBody = document.getElementById('contatoTabela');
        const emptyRow = document.getElementById('vazioCampo'); 

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;

            if (emptyRow) {
                emptyRow.remove();
            }

            const newRow = document.createElement('tr');
            const nameCell = document.createElement('td');
            const phoneCell = document.createElement('td');

            nameCell.textContent = nome;
            phoneCell.textContent = telefone;

            newRow.appendChild(nameCell);
            newRow.appendChild(phoneCell);

            contactTableBody.appendChild(newRow);

            form.reset();
        });