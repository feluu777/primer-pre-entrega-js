const montoIngresado = prompt("Ingrese el monto que desee");

function tresCuotas() {
    const resultadoDeLaCuenta = montoIngresado / 3;
    console.log("El total a pagar en cada cuota es:" + resultadoDeLaCuenta)
}

function seisCuotas() {
    let resultadoDeLaCuenta = montoIngresado / 6 + (montoIngresado / 6 * interes);
    console.log("El total a pagar en cada cuota es:" + resultadoDeLaCuenta)
}

function doceCuotas() {
    let resultadoDeLaCuenta = montoIngresado / 12 + (montoIngresado / 6 * interes);
    console.log("El total a pagar en cada cuota es:" + resultadoDeLaCuenta)
}

let interes = 0.10;

if (montoIngresado < 50000) {
    interes = 0.20;
}


let opcion = parseInt(prompt("Elija la cantidad de cuotas en el que quiera realizar el pago\n1- 3 Cuotas\n2- 6 Cuotas(con interes)\n3- 12 Cuotas(con interes)"))

while (opcion != 4)
    break; {

    switch (opcion) {
        case 1:
            tresCuotas();
            break;

        case 2:
            seisCuotas();
            break;

        case 3:
            doceCuotas();
            break;
    }

}
