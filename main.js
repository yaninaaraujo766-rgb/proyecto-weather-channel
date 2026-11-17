function cargarCiudad() {
  let ciudad = document.querySelector("input").value.trim();

  if (ciudad === "") {
    alert("Por favor, ingresa el nombre de una ciudad.");
    return;
  }

  let ciudadBusqueda = ciudad.toLowerCase() === "buenos aires" ? "Buenos Aires,ar" : ciudad;

let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudadBusqueda)}&appid=251f87982462236a685e5d90a480c597&units=metric&lang=es`;

  $.getJSON(url, function(data) {
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector("#ciudad").textContent = data.name;
    document.querySelector("#temperatura").innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
    document.querySelector("img").setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.querySelector("#descripcion").textContent = data.weather[0].description;
    
    document.querySelector("input").value = "";
  })
  .fail(function() {
    alert("No se encontró la ciudad o hubo un error en la conexión.");
  });
}

const boton = document.querySelector("button");
boton.addEventListener("click", function(e) {
  e.preventDefault();
  cargarCiudad();
});