
const heroi = {
    nome: "Arthas",
    xp: 6500
};

let patente = "";

switch (true) {
    case (heroi.xp < 1000):
        patente = "Ferro";
        break;
    case (heroi.xp >= 1000 && heroi.xp <= 2000):
        patente = "Bronze";
        break;
    case (heroi.xp >= 2001 && heroi.xp <= 5000):
        patente = "Prata";
        break;
    case (heroi.xp >= 5001 && heroi.xp <= 7000):
        patente = "Ouro";
        break;
    case (heroi.xp >= 7001 && heroi.xp <= 8000):
        patente = "Platina";
        break;
    case (heroi.xp >= 8000 && heroi.xp <= 9000):
        patente = "Ascendente";
        break;
   case (heroi.xp >= 9000 && heroi.xp <= 10000):
        patente = "Imortal";
        break;

    default:
        patente = "Radiante";
        break;
}
console.log("O Herói de nome " + heroi.nome + " está no nível de " + patente);