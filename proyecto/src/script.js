// Seleccionamos los elementos del DOM
const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const resultado = document.getElementById("resultado");
const lanzarBtn = document.getElementById("lanzarBtn");

// Evento al hacer clic en el botón
lanzarBtn.addEventListener("click", () => {
  // Agregamos animación de giro
  dado1.classList.add("spin");
  dado2.classList.add("spin");

  // Esperamos un poco para simular el lanzamiento
  setTimeout(() => {
    // Quitamos la animación
    dado1.classList.remove("spin");
    dado2.classList.remove("spin");

    // Generamos números aleatorios del 1 al 6
    const valor1 = Math.floor(Math.random() * 6) + 1;
    const valor2 = Math.floor(Math.random() * 6) + 1;

    // Mostramos los emojis de los dados
    const caras = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    dado1.textContent = caras[valor1 - 1];
    dado2.textContent = caras[valor2 - 1];

    // Mostramos el resultado
    const suma = valor1 + valor2;
    resultado.textContent = `Sacaste ${valor1} + ${valor2} = ${suma}`;
  }, 500);
});
