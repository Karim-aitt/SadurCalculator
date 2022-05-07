
let resultado = document.getElementById("Resultado");
let ejercito = 0;

document.getElementById("buttonResultado").addEventListener("click", function(){

  

  let espadachin = Number(document.getElementById("espadachin").value)
  let arquero = Number(document.getElementById("arquero").value)
  let lancero = Number(document.getElementById("lancero").value)
  let caballero = Number(document.getElementById("caballero").value)
  let boniDeGeneral = Number(document.getElementById("boniDeGeneral").value)
  let boniDeCasilla = Number(document.getElementById("boniDeCasilla").value)
  

  function fight(esp, arq, lan, cab, boniDeGeneral, boniDeCasilla){

    return esp + (arq*2) + (lan*2) + (cab*4) + boniDeCasilla + boniDeGeneral
  
}
  
var resulta = fight(espadachin,arquero,lancero,caballero,boniDeGeneral,boniDeCasilla)

  resultado.innerHTML = `Ejercito = ${resulta}`
  ejercito = resulta;
})

let arrayEjercito = []

document.getElementById("dado1").addEventListener("click", function(){
  
  let dado1 = Math.floor(Math.random()*20)+1

  if(arrayEjercito.length < 1){
    let final2 = document.getElementById("resultadoFinal2")
    final2.innerHTML = dado1+ejercito

    arrayEjercito.push(dado1+ejercito)

  } else {
  
  document.getElementById("numeroDado1").innerHTML = dado1
  document.getElementById("resultadoFinal").innerHTML = dado1+ejercito

  document.getElementById("divDado10").style="display: none !important";
  document.getElementById("divDado6").style="display: none !important";

  arrayEjercito.push(dado1+ejercito)
  }

})

document.getElementById("dado2").addEventListener("click", function(){
  let dado2 = Math.floor(Math.random()*10)+1
  
  if(arrayEjercito.length < 1){
    let final2 = document.getElementById("resultadoFinal2")
    final2.innerHTML = dado2+ejercito

    arrayEjercito.push(dado2+ejercito)
  } else {

    document.getElementById("numeroDado2").innerHTML = dado2
    document.getElementById("resultadoFinal").innerHTML = dado2+ejercito

    document.getElementById("divDado20").style="display: none !important";
    document.getElementById("divDado6").style="display: none !important";

    arrayEjercito.push(dado2+ejercito)
  }
  
})

document.getElementById("dado3").addEventListener("click", function(){
  let dado3 = Math.floor(Math.random()*6)+1

  if(arrayEjercito.length < 1){
    let final2 = document.getElementById("resultadoFinal2")
    final2.innerHTML = dado3+ejercito

    arrayEjercito.push(dado3+ejercito)
  } else {
  document.getElementById("numeroDado3").innerHTML = dado3
  document.getElementById("resultadoFinal").innerHTML = dado3+ejercito

  document.getElementById("divDado20").style="display: none !important";
  document.getElementById("divDado10").style="display: none !important";

  arrayEjercito.push(dado3+ejercito)
  }
})

document.getElementById("luchaDeEjercitos").addEventListener("click", function(){
  
  console.log(arrayEjercito)
  
  if(arrayEjercito[0] > arrayEjercito[1]){
    alert("Ha ganado el ejercito 1")
  } alert("Ha ganado el ejercito 2")

})