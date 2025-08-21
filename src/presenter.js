import saludar from "./saludador";
const nombre= document.querySelector("#nombre");
const genre=document.querySelector("#genre");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<h2>" + saludar(nombre.value, genre.value)+ "</h2>";
});
