import { Aguila, Serpiente, Oso, Lobo, Leon } from "./modulos.js";

let animalesType = {};

(async () => {
  try {
    const responseObject = await fetch("./animales.json");
    const { animales } = await responseObject.json();

    animales.forEach((animal) => {
      animalesType[animal.name] = obtenerAnimal(animal);
      // console.log(animal)
    });

    // console.log(animales);
  } catch (error) {
    // console.log(error);
  }
})();

const obtenerAnimal = (animal) => {
  switch (animal.name) {
    case "Leon":
      return new Leon(
        animal.name,
        "",
        `./assets/imgs/${animal.imagen}`,
        "",
        `./assets/sounds/${animal.sonido}`
      );
    case "Lobo":
      return new Lobo(
        animal.name,
        "",
        `./assets/imgs/${animal.imagen}`,
        "",
        `./assets/sounds/${animal.sonido}`
      );
    case "Oso":
      return new Oso(
        animal.name,
        "",
        `./assets/imgs/${animal.imagen}`,
        "",
        `./assets/sounds/${animal.sonido}`
      );
    case "Serpiente":
      return new Serpiente(
        animal.name,
        "",
        `./assets/imgs/${animal.imagen}`,
        "",
        `./assets/sounds/${animal.sonido}`
      );
    case "Aguila":
      return new Aguila(
        animal.name,
        "",
        `./assets/imgs/${animal.imagen}`,
        "",
        `./assets/sounds/${animal.sonido}`
      );
  }
};

// let animalList= [];

let animal = document.querySelector("#animal"),
  edad = document.querySelector("#edad"),
  comentarios = document.querySelector("#comentarios"),
  boton = document.querySelector("#btnRegistrar"),
  preview = document.querySelector("#preview");

animal.addEventListener("change", () => {
  let selectedAnimal = animal.value;

  let animalObj = animalesType[selectedAnimal];
  const imgURL = animalObj.img;

  if (imgURL) {
    preview.src = imgURL;
    const previewWidth = 150;
    const previewHeight = 120;
    preview.width = previewWidth;
    preview.height = previewHeight;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const botonAgregar = document.getElementById("btnRegistrar");
  const contenedorAnimales = document.querySelector(".contenedor_animales");

  botonAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    const animalSelect = document.getElementById("animal").value;

    const edadSelect = document.getElementById("edad");

    const comentariosTextarea = document.getElementById("comentarios");

    const objAnimals = animalesType[animalSelect];

    objAnimals.edad = edadSelect.value;
    objAnimals.comentarios = comentariosTextarea.value;

    const nuevaTarjeta = `
      <div class="card" style="width: 15rem;">
        <img src="${objAnimals.img}" class="card-img-top" style="max-height: 10rem;" alt="${objAnimals.name}">
        <div class="card-body">
          <h5 class="card-title">${objAnimals.name}</h5>
          <p class="card-text">Edad: ${objAnimals.edad}</p>
          <p class="card-text">Comentarios:${objAnimals.comentarios}</p>
          <button class="audio-button" data-sound="${objAnimals.sonido}">
            <i class="fas fa-volume-up"></i> Reproducir sonido
          </button>
        </div>
      </div>
    `;

    contenedorAnimales.insertAdjacentHTML("beforeend", nuevaTarjeta);

    // Limpia el formulario después de agregar la nueva tarjeta
    limpiarFormulario();
    // Obtener todos los botones de audio y agregar el evento de reproducción de sonido
    const audioButtons = document.querySelectorAll(".audio-button");
    audioButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const soundSrc = button.getAttribute("data-sound");
        const audio = new Audio(soundSrc);
        audio.play();
      });
    });
  });
});

function limpiarFormulario() {
  // Restablecer el valor del select "animal" a la opción predeterminada
  document.getElementById("animal").selectedIndex = 0;

  // Restablecer otros campos del formulario si es necesario
  document.getElementById("edad").selectedIndex = 0;
  document.getElementById("comentarios").value = "";
  preview.src = "./assets/imgs/lion.svg";
}
