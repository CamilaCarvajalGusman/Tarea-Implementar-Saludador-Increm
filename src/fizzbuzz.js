function convertirFizzBuzz(a) {
    if (a % 3 != 0 && a % 5 != 0) {
        return a.toString();
    } else if (a % 3 == 0) {
        return "fizz";
    } else if (a % 5 == 0) {
        return "buzz";
    }
}
export default convertirFizzBuzz;