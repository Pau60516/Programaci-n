let bingo = [];
let cont = 1;

for (let fila = 0; fila < 5; fila++) {
    let filaBingo = [];
    for (columna = 0; columna < 5; columna++) {
        filaBingo[columna] = cont * 2;

        cont++;
    }
    bingo[fila] = filaBingo;
}

let letras = "";

for (let index = 0; index < 5; index++) {
    letras += "<tr>"
    for (let index1 = 0; index1 < 5; index1++) {
        letras += "<td><div>" + bingo[index1][index] + "</div></td>";

    }
    letras += "</tr>"
}

for (let tabla = 1; tabla < 9; tabla++) {
    document.getElementById(`tabla${tabla}`).innerHTML = letras
}



