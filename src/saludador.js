function saludar(nombre, genre){
    const hoy = new Date();
    let gen="";
    if(genre==='Femenino'){
        gen="señorita"
    }else{
        gen="señor"
    }
    if(hoy.getHours()>12&&hoy.getHours()<19){
        return "Buenas tardes "+gen+" "+nombre;
    }else{
        if(hoy.getHours()<12){
            return "Buenos días "+gen+" "+nombre;
        }else{
            return "Buenas noches "+gen+" "+nombre;
        }
    }
    //  "hoy es ",hoy.toDateString(), " - ",hoy.getHours(),":",hoy.getMinutes()
}
export default saludar;