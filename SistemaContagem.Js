console.log ("Hello World")
let numeroAlunos = 10;
for (let contador = 0; contador < numeroAlunos; contador++) {
    if(contador == 0){
        console.log ("O numero é Zero")
    }
   else if(contador % 2 == 0) {
        console.log(`O numero ${contador} é PAR`)
     } else if(contador % 2 == 1) {
         console.log(`O numero ${contador} é IMPAR`)
     }
}
console.log("Por hoje é só pessoal !")
