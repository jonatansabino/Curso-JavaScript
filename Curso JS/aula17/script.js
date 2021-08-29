//Array var num =[5,8,4]

//Objeto 
var amigo = {nome:'José', sexo:'M', peso:85.4,engordar(p=0){
console.log('Endorgou')
this.peso +=p
}} 
amigo.engordar(2)
console.log( `${amigo.nome} pesa ${amigo.peso}Kg`)