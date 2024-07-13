let bingo  = [];
let cont = 1;

for (let fila = 0; fila < 5; fila++) {
    let filaTabla = [];

    for (let columna = 0; columna < 5; columna++) {
        filaTabla[columna] = cont * 2;
        cont++;
    }
    bingo[fila] = filaTabla;
}



for (let fila = 0; fila < 5; fila++) {
    for (let columna = 0; columna < 5; columna++) {
        if (fila == columna || fila + columna == 4) {
        console.log(bingo[fila][columna]);
        }
    }
}



for (let fila = 0; fila < 3; fila++) {
    for (let columna = 0; columna < 3; columna++) {
        if (fila == columna || fila + columna == 2) {
        console.log(bingo[fila][columna]);
        }
    }
}



for (let fila = 0; fila < 3; fila++) {
    for (let columna = 2; columna < 5; columna++) {
        if (fila+columna==(fila+1)*2 || fila+columna==4) {
        console.log(bingo[fila][columna]);
        }
    }
}



for (let fila = 2; fila < 5; fila++) {
    for (let columna = 0; columna < 3; columna++) {
        if (fila+columna==(columna+1)*2 || fila+columna==4) {
        console.log(bingo[fila][columna]);
        }
    }
}



console.log("\n");
console.log("B");
console.log("\n");

for (let columna = 0; columna < 1; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        console.log(bingo[columna][fila]);
    }
}


console.log("\n");
console.log("I");
console.log("\n");

for (let columna = 1; columna < 2; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        console.log(bingo[columna][fila]);
    }
}


console.log("\n");
console.log("N");
console.log("\n");

for (let columna = 2; columna < 3; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        console.log(bingo[columna][fila]);
    }
}

console.log("\n");
console.log("G");
console.log("\n");

for (let columna = 3; columna < 4; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        console.log(bingo[columna][fila]);
    }
}


console.log("\n");
console.log("O");
console.log("\n");

for (let columna = 4; columna < 5; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        console.log(bingo[columna][fila]);
    }
}






