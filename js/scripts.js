// Um exemplo de interação que você pode começar a adicionar
document.addEventListener('DOMContentLoaded', function() {
    const infoSection = document.querySelector('#info');

    setTimeout(() => {
        infoSection.innerHTML += "<p>Esta página está carregando informações dinâmicas da IA!</p>";
    }, 2000);
});

