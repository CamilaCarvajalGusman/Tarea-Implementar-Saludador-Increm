function saludar(nombre, genre, age, language) {
  console.log("Camila Carvajal");
  const hoy = new Date();
  let gen = "";

  if (language === 's') {
    if (genre === 'Femenino' && age < 30) {
      gen = "señorita";
    } else if (genre === 'Femenino' && age >= 30) {
      gen = "señora";
    } else if (genre === "Masculino" && age >= 30) {
      gen = "señor";
    } else {
      gen = "joven";
    }

    if (hoy.getHours() < 12) {
      return "Buenos días " + gen + " " + nombre;
    } else if (hoy.getHours() < 19) {
      return "Buenas tardes " + gen + " " + nombre;
    } else {
      return "Buenas noches " + gen + " " + nombre;
    }

  } else if (language === 'e') {
    if (genre === 'Femenino' && age < 30) {
      gen = "young lady";
    } else if (genre === 'Femenino' && age >= 30) {
      gen = "lady";
    } else if (genre === "Masculino" && age >= 30) {
      gen = "mister";
    } else {
      gen = "young one";
    }

    if (hoy.getHours() < 12) {
      return "Good morning " + gen + " " + nombre;
    } else if (hoy.getHours() < 19) {
      return "Good afternoon " + gen + " " + nombre;
    } else {
      return "Good evening " + gen + " " + nombre;
    }

  } else if (language === 'p') {
    if (genre === 'Femenino' && age < 30) {
      gen = "senhorita";
    } else if (genre === 'Femenino' && age >= 30) {
      gen = "senhora";
    } else if (genre === "Masculino" && age >= 30) {
      gen = "senhor";
    } else {
      gen = "jovem";
    }

    if (hoy.getHours() < 12) {
      return "Bom dia " + gen + " " + nombre;
    } else if (hoy.getHours() < 19) {
      return "Boa tarde " + gen + " " + nombre;
    } else {
      return "Boa noite " + gen + " " + nombre;
    }

  } else if (language === 'f') {
    if (genre === 'Femenino' && age < 30) {
      gen = "mademoiselle";
    } else if (genre === 'Femenino' && age >= 30) {
      gen = "madame";
    } else if (genre === "Masculino" && age >= 30) {
      gen = "monsieur";
    } else {
      gen = "jeune";
    }

    if (hoy.getHours() < 12) {
      return "Bonjour " + gen + " " + nombre;
    } else if (hoy.getHours() < 19) {
      return "Bon après-midi " + gen + " " + nombre;
    } else {
      return "Bonsoir " + gen + " " + nombre;
    }
  }

}
export default saludar;