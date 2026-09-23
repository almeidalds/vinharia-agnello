const videoFundo = document.querySelector('#video-fundo');
const controleVideo = document.querySelector('.controle-video');
const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');

if (videoFundo && controleVideo) {
    controleVideo.hidden = false;

    function atualizarControle() {
        controleVideo.textContent = videoFundo.paused
            ? 'Reproduzir vídeo de fundo'
            : 'Pausar vídeo de fundo';
    }

    function reproduzirFundo() {
        const fonte = videoFundo.querySelector('source');
        if (!fonte.hasAttribute('src')) {
            fonte.src = fonte.dataset.src;
            videoFundo.load();
        }
        videoFundo.play().catch(atualizarControle);
    }

    controleVideo.addEventListener('click', function () {
        if (videoFundo.paused) {
            reproduzirFundo();
        } else {
            videoFundo.pause();
        }
    });
    videoFundo.addEventListener('play', atualizarControle);
    videoFundo.addEventListener('pause', atualizarControle);
    movimentoReduzido.addEventListener('change', function () {
        if (movimentoReduzido.matches) videoFundo.pause();
    });
    if (!movimentoReduzido.matches) reproduzirFundo();
}
