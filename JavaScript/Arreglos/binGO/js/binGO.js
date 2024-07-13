let bingo=[];
let cont=1;

for(let fila=0; fila<5; fila++){
    let filaBingo=[];
    for(columna=0; columna<5; columna++){
    filaBingo[columna]= cont * 2;

    cont++;
}   
bingo[fila]=filaBingo;
}

console.log(bingo);


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
