function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var fano = document.getElementById('txtano')
    res.style.textAlign = 'center'
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.padding = '8pt'
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade>=0 && idade < 10) {
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
            res.innerHTML = `Foi detectado um ${gênero} com ${idade} anos.`
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade>=0 && idade < 10) {
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
            res.innerHTML = `Foi detectada uma ${gênero} com ${idade} anos.`
        } res.appendChild(img)
    }
}