function saludar(nombre){
    const hoy = new Date();
    if(hoy.getHours()>12&&hoy.getHours()<19){
        return "Buenas tardes "+nombre;
    }else{
        if(hoy.getHours()<12){
            return "Buenos días "+nombre;
        }else{
            return "Buenas noches "+nombre;
        }
    }
    //  "hoy es ",hoy.toDateString(), " - ",hoy.getHours(),":",hoy.getMinutes()
}
export default saludar;