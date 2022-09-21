

//función suma borrada ------>




// modificación funcion suma - tres parámetros
function suma(n1,n2,n3) {
    let res;
    let suma = n1+n2+n3;
    res = suma
    return res;
}

function resta(num1, num2) {
    let res;
    let resta = num1-num2;
    res = resta;
    return res;
}

function multiplicar(num1,num2) {
    let res;
    let multiplicar = num1*num2;
    res = multiplicar;
    return res;
}

function dividir(num1,num2) {
    let res;
    let dividir = num1/num2;
    res = dividir;
    return res;
}

//exportación de funciones
module.exports = {suma, resta, multiplicar, dividir};