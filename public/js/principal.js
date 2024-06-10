document.querySelectorAll('.abrirmodal').forEach((botao, index) => {
    const dialog = document.querySelectorAll('dialog')[index];
    const botaofechar = dialog.querySelector('.botaofechar');

    botao.onclick = function () {
        dialog.showModal();
    }

    botaofechar.onclick = function () {
        dialog.close();
    }
});

