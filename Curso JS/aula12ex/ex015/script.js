function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formulario = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formulario.value.length == 0 || formulario.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <= 2){
                 // Bebe
                img.setAttribute('src','imagens/bebe-menino.png')
            }else if (idade >=3 && idade < 14){
                //Criança
                img.setAttribute('src','imagens/crianca-menino.png')
             }else if(idade <21){
                 //Jovem
                 img.setAttribute('src','imagens/jovem-homem.png')
             }else if (idade < 50){
                //Adulto
                img.setAttribute('src','imagens/adulto-homem.png')
            }else {
                //Idoso
                img.setAttribute('src','imagens/velho-homem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <= 2){
                // Bebe
                img.setAttribute('src','imagens/bebe-menina.png')
            }else if (idade >=3 && idade < 14){
                //Criança
                img.setAttribute('src','imagens/crianca-menina.png')
             }else if(idade >=14 &&idade <21){
                 //Jovem                 
                 img.setAttribute('src','imagens/jovem-mulher.png')
             }else if (idade >=21 && idade < 50){
                //Adulto
               img.setAttribute('src','imagens/adulta-mulher.png')
            }else {
                //Idoso
                img.setAttribute('src','imagens/velho-mulher.png')
            }
        }
       
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}