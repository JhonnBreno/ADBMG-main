document.addEventListener('DOMContentLoaded', function() {
    mudarImagem();

const bar = document.getElementById('bar')
const sidebar = document.getElementById('sidebar')

bar.addEventListener('click', () =>{
    if(sidebar.classList.contains('hidden')){
        sidebar.classList.remove('hidden')
        sidebar.classList.add('visible')
    } else{
        sidebar.classList.contains('visible')
        sidebar.classList.remove('visible')
        sidebar.classList.add('hidden')
    }
        
})

function mudarImagem() {
    const imagem = document.getElementById('main-img');
    const hora = new Date().getHours();

    if (hora >= 6 && hora < 12) {
        imagem.src = './imagens/manha.jpg'; // Manhã
    } else if (hora >= 12 && hora < 16) {
        imagem.src = './imagens/tarde.jpg'; // Tarde
    } else if(hora >= 16 && hora < 18){
        imagem.src = './imagens/ceu-sm.jpg'; // tardinha
    }else{
        imagem.src = './imagens/noite.jpg'; // noite
    }
}

// Atualiza a imagem a cada hora
setInterval(mudarImagem, 3600000); // 3600000 ms = 1 hora

const btnDonate = document.getElementById('btn-donate')
const contribua = document.getElementById('contribua')

btnDonate.addEventListener('click', () =>{
    if (contribua.classList.contains('hidden2')){
    contribua.classList.remove('hidden2')
    contribua.classList.add('visible2')
    }else{
        contribua.classList.contains('visible2')
        contribua.classList.remove('visible2')
        contribua.classList.add('hidden2')
    }
})

function copyPixUrl() {
    var pixUrl = "542f1979-bf33-4c42-82ec-771dd057ec5f";
    var tempInput = document.createElement("input");
    tempInput.value = pixUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("A chave pix foi copiada: " + pixUrl);
}


    const bible = document.getElementById('bible');
    const containerModal = document.getElementById('containerModal');
    const close = document.getElementById('close');

    // Adiciona um ouvinte de evento ao botão que abre o modal
    bible.addEventListener('click', function() {
        containerModal.style.display = "flex";
    });

    // Adiciona um ouvinte de evento ao botão que fecha o modal
    close.addEventListener('click', function() {
        containerModal.style.display = "none";
    });

        // Adiciona um ouvinte de evento à janela para fechar o modal ao clicar fora dele
        window.addEventListener("click", function(event) {
            if (event.target === containerModal) {
                containerModal.style.display = "none";
            }
            })    
});

