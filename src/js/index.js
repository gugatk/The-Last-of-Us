
const btnCarrossel = document.querySelectorAll('.btn');
const imagens = document.querySelectorAll('.imagem')


btnCarrossel.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        desativarBtnSelecionado();

        btn.classList.add('selecionado')

        ativarBtnSelecionado();
        
        imagens[indice].classList.add('ativa')
        
    })
})

function ativarBtnSelecionado() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBtnSelecionado() {
    const btnSelecionado = document.querySelector('.selecionado');
    btnSelecionado.classList.remove('selecionado');
}
