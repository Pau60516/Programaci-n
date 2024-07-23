let tablA = document.getElementById("tabla2");


for (let fila = 0; fila < 5; fila++) {
    for (let columna = 0; columna < 5; columna++) {
        if (fila == columna || fila + columna == 4) {
            tablA.children[fila].children[columna].children[0].classList.add("color1")
        }
    }
}


let tablA3 = document.getElementById("tabla3");

for (let fila = 0; fila < 3; fila++) {
    for (let columna = 0; columna < 3; columna++) {
        if (fila == columna || fila + columna == 2) {
            tablA3.children[fila].children[columna].children[0].classList.add("color2")
        }
    }
}

for (let fila = 0; fila < 3; fila++) {
    for (let columna = 2; columna < 5; columna++) {
        if (fila+columna==(fila+1)*2 || fila+columna==4) {
            tablA3.children[fila].children[columna].children[0].classList.add("color2")
        }
    }
}



for (let fila = 2; fila < 5; fila++) {
    for (let columna = 0; columna < 3; columna++) {
        if (fila+columna==(columna+1)*2 || fila+columna==4) {
            tablA3.children[fila].children[columna].children[0].classList.add("color2")
        }
    }
}

let tablA4 = document.getElementById("tabla4");
for (let columna = 0; columna < 1; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        tablA4.children[fila].children[columna].children[0].classList.add("color3") 
    }
}

let tablA5 = document.getElementById("tabla5");
for (let columna = 1; columna < 2; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        tablA5.children[fila].children[columna].children[0].classList.add("color4") 
    }
}

let tablA6 = document.getElementById("tabla6");
for (let columna = 2; columna < 3; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        tablA6.children[fila].children[columna].children[0].classList.add("color5") 
    }
}

let tablA7 = document.getElementById("tabla7");
for (let columna = 3; columna < 4; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        tablA7.children[fila].children[columna].children[0].classList.add("color6")  
    }
}

let tablA8 = document.getElementById("tabla8");

for (let columna = 4; columna < 5; columna++) {
    for (let fila = 0; fila < 5; fila++) {
        tablA8.children[fila].children[columna].children[0].classList.add("color7")  
    }
}



