var num = document.getElementById('fnum')
var lista = document.querySelector('select#flista')
var rest = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n) <= 100){
        return true
      }else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != - 1){
        return true
     }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item =document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
       
     }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var posi in valores){
            soma += valores[posi]
            if(valores[posi] > maior)
            maior = valores [posi]
            if (valores [posi] < menor )
            menor = valores [posi]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todo os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media total dos valores ${media}</p>`
    }

}