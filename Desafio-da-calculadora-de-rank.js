let resultado= saldoVitoria(40,7)
function saldoVitoria(numbV, numbD){
  let subtrair= numbV-numbD
  return subtrair;
}
const rank={resultado};
let patente=" "
switch(true){
  case(rank.resultado<=10):patente="Ferro";break;
  case(rank.resultado>=11&&rank.resultado<=20):patente="Bronze";break;
  case(rank.resultado>=21&&rank.resultado<=50):patente="Prata";break;
  case(rank.resultado>=51&&rank.resultado<=80):patente="Ouro";break;
  case(rank.resultado>=81&&rank.resultado<=90):patente="Diamante";break;
  case(rank.resultado>=91&&rank.resultado<=100):patente="Lenda";break;
  case(rank.resultado>=101):patente="Imortal";break;
} 
console.log ("O heróe tem saldo de "+ resultado+" vitórias, está no nível de "+ patente)