let nome = "ABNegativo";
let nivel = parseInt(1000);

const niveisDisponiveis = [1000, 2000, 5000, 7000, 8000, 9000, 10000]; 
const niveisMedalhas = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let i = 0; i < 7; i++) {

    if (nivel < 1001) {

        console.log(`O Herói de nome ${nome} está no nível de ${niveisMedalhas[0]}`);

        break;

    }
    else if (nivel > niveisDisponiveis[i] && nivel <= niveisDisponiveis[i+1] ) {

        console.log(`O Herói de nome ${nome} está no nível de ${niveisMedalhas[i+1]}`);

        break;

    }
    else if (nivel >= 10001)  {

        console.log(`O Herói de nome ${nome} está no nível de ${niveisMedalhas[7]}`);

        break;

    }

}



