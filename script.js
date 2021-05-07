// Slider inicial + pesquisa //
const botao = document.querySelector('.BotaoCima')
const slider = document.querySelector('.FrontSliderBG')
const afterslide = document.querySelector('.DepoisDoSlider')
const barracima = document.querySelector('.BarraCima')
const input = document.querySelector('.Pesquisa')
const botaopesquisa = document.querySelector('.BotaoPesquisa')
// Slider inicial + pesquisa //
// Funções dos botões do slider //
const listrasBtn = document.querySelector('.ListrasBTN')
const sliderBtn = document.querySelector('.SliderBTN')
const sliderLateral = document.querySelector('.SideSlider')
const videosbox = document.querySelector('.Videos')
// Funções dos botões do slider //
// Funções das opções do slider //
const inicioBtn = document.querySelector('.HomeBox')
const exploreBtn = document.querySelector('.ExploreBox')
const subsBtn = document.querySelector('.SubsBox')
const bibliotecaBtn = document.querySelector('.BibliotecaBox')
const historicoBtn = document.querySelector('.HistoricoBox')
const curtidosBtn = document.querySelector('.CurtidosBox')

const home = document.getElementById('Home')
const explore = document.getElementById('Explore')
const subs = document.getElementById('Subs')
const biblioteca = document.getElementById('Biblioteca')
const historico = document.getElementById('Historico')
const curtidos = document.getElementById('Curtidos')

curtidosBtn.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com/playlist?list=LL`
})
historicoBtn.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com/feed/history`
})
bibliotecaBtn.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com/feed/library`
})
subsBtn.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com/feed/subscriptions`
})
exploreBtn.addEventListener('click', function (){
    window.location.href = `https://www.youtube.com/feed/explore`
})
inicioBtn.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com`
})
// Funções das opções do slider //
// Função do slide lateral //
listrasBtn.addEventListener('click', function () {
    sliderLateral.style.transform = "translateX(300px)"
})
sliderBtn.addEventListener('click', function () {
    if (sliderBtn.classList.contains('clicado')) {
        sliderLateral.style.transform = "translateX(-5px)"
        home.style.transform = "translateX(213px) translateY(20px) scale(2)"
        explore.style.transform = "translateX(213px) translateY(20px) scale(2)"
        subs.style.transform = "translateX(213px) translateY(20px) scale(2)"
        biblioteca.style.transform = "translateX(213px) translateY(20px) scale(2)"
        historico.style.transform = "translateX(213px) translateY(20px) scale(2)"
        curtidos.style.transform = "translateX(213px) translateY(20px) scale(2)"
        sliderBtn.classList.remove('clicado')
    } else {
        sliderLateral.style.transform = "translateX(183px)"
        home.style.transform = "translateX(24px) translateY(20px) scale(2)"
        explore.style.transform = "translateX(24px) translateY(20px) scale(2)"
        subs.style.transform = "translateX(24px) translateY(20px) scale(2)"
        biblioteca.style.transform = "translateX(24px) translateY(20px) scale(2)"
        historico.style.transform = "translateX(24px) translateY(20px) scale(2)"
        curtidos.style.transform = "translateX(24px) translateY(20px) scale(2)"
        sliderBtn.classList.add('clicado')
    }
})

// Função de pesquisar //
botaopesquisa.addEventListener('click', function (e) {
    window.location.href = `https://www.youtube.com/results?search_query=${input.value}`
})
input.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        window.location.href = `https://www.youtube.com/results?search_query=${this.value}`
    }
})
// Função de dar slide no início //
botao.addEventListener('click', function () {
        barracima.style.transform = "translateY(0px)"
        slider.style.transform = "translateY(-660px)"
        sliderLateral.style.left = "-190px"
        videosbox.style.left = "4.5%"
        barraBaixo.style.transform = "translateY(0px)"
    })
// Função de dar slide no início //

const barraBaixo = document.querySelector('.BarraBaixo')
const inicioBtnBaixo = document.querySelector('.HomeBoxBaixo')
const exploreBtnBaixo = document.querySelector('.ExploreBoxBaixo')
const subsBtnBaixo = document.querySelector('.SubsBoxBaixo')
const bibliotecaBtnBaixo = document.querySelector('.BibliotecaBoxBaixo')

bibliotecaBtnBaixo.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com/feed/library`
})
subsBtnBaixo.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com/feed/subscriptions`
})
exploreBtnBaixo.addEventListener('click', function (){
    window.location.href = `https://www.youtube.com/feed/explore`
})
inicioBtnBaixo.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com`
})