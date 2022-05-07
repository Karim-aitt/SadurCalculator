let random = Math.floor(Math.random()*(3))+1;

function recursos(numeroDeColonos, bonificadorDeCasilla){
  if(random == 1){
    return numeroDeColonos * random * bonificadorDeCasilla + "Los colonos hoy estaban cansados y trajeron solo "
  } else if(random == 2){
    return numeroDeColonos * random * bonificadorDeCasilla + "Tus aldeanos estan chachis"
  } else if(random == 3){
    return numeroDeColonos * random * bonificadorDeCasilla + "Tus aldeanos son lo mas"
  }
  
  return numeroDeColonos * random * bonificadorDeCasilla
}

recursos(25,1)