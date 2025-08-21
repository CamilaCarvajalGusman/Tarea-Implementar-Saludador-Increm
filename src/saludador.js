function saludar(nombre){
    const hoy = new Date();
    return "Hola "+ nombre;
    //  "hoy es ",hoy.toDateString(), " - ",hoy.getHours(),":",hoy.getMinutes()
}
export default saludar;