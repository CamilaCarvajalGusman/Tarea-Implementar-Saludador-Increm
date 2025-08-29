function convertirFizzBuzz(a) {
    if (a % 3 != 0 && a % 5 != 0) {
        return a.toString();
    } else if (a % 3 == 0) {
        return "fizz";
    }
}
export default convertirFizzBuzz;