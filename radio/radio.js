
 const block = document.getElementById('block')
    const audio = document.getElementById('audio')
    block.addEventListener('click', ()=>{

    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
})
window.onload = function() {
    const imagens = document.querySelectorAll('.imagem');
    
    imagens.forEach(imagem => {
        const srcInicial = imagem.src; // Guarda o caminho inicial da imagem
        imagem.addEventListener('click', () => {
            if (imagem.src === srcInicial) {
                imagem.src = "../imagens/musica.gif"; // Substitua pelo caminho da nova imagem
                imagem.alt = "nova";
            } else {
                imagem.src = srcInicial;
                imagem.alt = "inicial";
            }
        });
    });
}



