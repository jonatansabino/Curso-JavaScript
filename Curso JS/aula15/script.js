var num= [2, 3, 4, 5, 6, 7, 8, 9]
//num[3] = 3
num.push (1)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
var pos = num.indexOf(12)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}

