function jumpscare(){
    var foto = document.getElementById('foto')
    var audio = new Audio('midia/screamercortado.mp4')
    audio.play()
    foto.style.height = '800px'
    foto.style.width = '100%'
    var botao = document.getElementById('botao')
    botao.style.backgroundColor = botao.style.backgroundColor == 'grey' ? 'red' : 'grey'

}
