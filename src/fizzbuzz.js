function fizzbuzz(a) {
    let cadena = "";
    for (let i = 1; i <= a; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            cadena = cadena + i.toString();
        } else if (i % 3 == 0 && i % 5 == 0) {
            cadena = cadena + "fizzbuzz";
        } else if (i % 3 == 0) {
            cadena = cadena + "fizz";
        } else if (i % 5 == 0) {
            cadena = cadena + "buzz";
        }
        if (i < a) {
            cadena = cadena + ", ";
        }
    }
    return cadena;
}
export default fizzbuzz;
