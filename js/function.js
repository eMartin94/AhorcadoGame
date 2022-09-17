let jugar = true;
let palabras = ["CERTUS", "PIZANGO","EDUARDO", "BECA"];

let adivinar = "";
let mostrar_palabra = "";
let letra_ingresada = "";
let letra_erronea = 0;

let res = document.getElementById('respuesta');
let lt = document.getElementById('letraIngresada');
let mp = document.getElementById('mostrarPalabra');
const bg = document.querySelector('.alert_respuesta');

function seleccionarLetra(l) {
    if (jugar == false) {
        return;
    }

    if (letra_ingresada.indexOf(l) != -1) {
        return;
    }

    letra_ingresada += l;
    lt.value = letra_ingresada

    if (adivinar.indexOf(l) != -1) {
        
        posicion = 0;
        almacenar_letra = mostrar_palabra;
        console.log("temp: " + almacenar_letra);

        while (adivinar.indexOf(l, posicion) != -1) {
            posicion = adivinar.indexOf(l, posicion);
            final = posicion + 1;

            texto_inicial = almacenar_letra.substring(0, posicion);
            console.log("txt ini: "+ texto_inicial)
            texto_final = almacenar_letra.substring(final, almacenar_letra.length);
            console.log("txtfin: " + texto_final);

            almacenar_letra = texto_inicial + l + texto_final;
            console.log("alm: "+almacenar_letra)
            posicion = final;
            console.log(posicion)
        }

        mostrar_palabra = almacenar_letra;
        mp.value = mostrar_palabra;

        if (mostrar_palabra.indexOf("_") == -1) {

            res.style.display = "block";
            bg.style.background = "#C3FF99";
            res.innerHTML = "🥳 ¡ FELICIDADES GANASTE ! 🥳";

            jugar = false;
        }
    }
    else {
        letra_erronea += 1;
        eval("document.imagen.src=\"img/" + "img" + letra_erronea + ".png\"");

        if (letra_erronea == 8) {

            res.style.display = "block";
            bg.style.background = "#FA7070";
            res.innerHTML = "😓 ¡ LO SENTIMOS, HAS PERDIDO ! 😓"
            jugar = false;
        }
    }
}

function reset() {
    seleccionarPalabra();
    lt.value = "";
    letra_ingresada = "";
    letra_erronea = 0;
    res.style.display = "none";
    document.imagen.src = "./img/imgInicial.png";
}

function seleccionarPalabra() {
    jugar = true;
    random_number = Math.round(Math.random() * (palabras.length - 1));
    adivinar = palabras[random_number];
    palabra_oculta = almacerLetra(adivinar);
    mp.value = palabra_oculta;
    mostrar_palabra = palabra_oculta;
}

function almacerLetra(m) {
    oculto = "";
    word_lenght = m.length;

    for (i = 0; i < word_lenght; i++) {
        oculto += "_";
    }
    return oculto;
}

window.onload = reset();