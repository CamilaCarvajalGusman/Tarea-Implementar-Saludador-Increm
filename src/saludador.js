function saludar(nombre, genre, age){
    const hoy = new Date();
    let gen="";
    if(genre==='Femenino'&& age<30){
        gen="señorita"
    }else{
        if(genre==='Femenino'&&age>30){
            gen="señora"
        }else{
            if(genre="Masculino"&&age>30){
                gen="señor"
            }else{
                gen="joven"
            }
        }
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