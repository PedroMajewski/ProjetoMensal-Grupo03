document.addEventListener('DOMContentLoaded', function() {
    const profissionalLabel = document.querySelector('label[for="profissional"]');
    const dropdown = document.getElementById('dropdownProfissional'); 
    const profissionalInput = document.getElementById('profissional');

    if (profissionalLabel && dropdown && profissionalInput) {
        profissionalLabel.addEventListener('click', function() {
            dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
        });

        dropdown.addEventListener('click', function(event) {
            if (event.target.tagName === 'OPTION') {
                profissionalInput.value = event.target.value;
                dropdown.style.display = "none";
            }
        });

        document.addEventListener('click', function(event) {
            if (!profissionalLabel.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.style.display = "none";
            }
        });
    }

  
    function carregarHistorico() {
        const historico = document.getElementById('historico');
        const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

        historico.innerHTML = '';

        agendamentos.forEach(agendamento => {
            const li = document.createElement('li');
            li.textContent = `Nome: ${agendamento.nome}, Telefone: ${agendamento.telefone}, Serviço: ${agendamento.servico}, Profissional: ${agendamento.profissional}`;
            historico.appendChild(li);
        });
    }

    
    carregarHistorico();

    
    const boton = document.querySelector("#boton");
    if (boton) {
        boton.addEventListener("click", (event) => {
            event.preventDefault(); 

            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const profissional = document.getElementById('profissional').value;

            const novoAgendamento = { nome, telefone, servico, profissional };

            
            let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
            agendamentos.push(novoAgendamento);

            
            localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

            
            carregarHistorico();

            
            document.getElementById('agendamentoForm').reset();

            const telefoneDestino = "5545998494985"; 
            const mensagem = `Novo agendamento:\nNome: ${nome}\nTelefone: ${telefone}\nServiço: ${servico}\nProfissional: ${profissional}`;
            const linkWhatsApp = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(mensagem)}`;
            window.open(linkWhatsApp, '_blank');
        });
    }

    
    const limpar = document.querySelector("#limpar");
    if (limpar) {
        limpar.addEventListener("click", () => {
            localStorage.removeItem('agendamentos'); 
            carregarHistorico(); 
        });
    }
});