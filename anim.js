
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
    { text: "Él la estaba esperando con una flor amarilla", time: 0 },
    { text: "Ella lo estaba soñando con la luz en su pupila", time: 5 },
    { text: "Y el amarillo del Sol iluminaba la esquina", time: 10 },
    { text: "Lo sentía tan cercano, lo sentía desde niña", time: 15 },
    { text: "Ella sabía que él sabía", time: 20 },
    { text: "Que algún día pasaría", time: 25 },
    { text: "Que vendría a buscarla", time: 30 },
    { text: "Con sus flores amarillas", time: 35 },
    { text: "No te apures, no detengas", time: 40 },
    { text: "El instante del encuentro", time: 45 },
    { text: "Está dicho que es un hecho", time: 50 },
    { text: "No la pierdas, no hay derecho", time: 55 },
    { text: "No te olvides que la vida", time: 60 },
    { text: "Casi nunca está dormida", time: 65 },
    { text: "En ese bar tan desierto nos esperaba el encuentro", time: 70 },
    { text: "Ella llegó en limusina amarilla por supuesto", time: 75 },
    { text: "Él se acercó de repente la miro tan de frente", time: 80 },
    { text: "Toda una vida soñada y no pudo decir nada", time: 85 },
    { text: "Ella sabía que él sabía", time: 90 },
    { text: "Que algún día pasaría", time: 95 },
    { text: "Que vendría a buscarla", time: 100 },
    { text: "Con sus flores amarillas", time: 105 },
    { text: "No te apures, no detengas", time: 110 },
    { text: "El instante del encuentro", time: 115 },
    { text: "Está dicho que es un hecho", time: 120 },
    { text: "No la pierdas, no hay derecho", time: 125 },
    { text: "No te olvides que la vida", time: 130 },
    { text: "Casi nunca está dormida", time: 135 },
    { text: "Flores amarillas", time: 140 },
    { text: "Ella sabía que él sabía", time: 145 },
    { text: "Que algún día pasaría", time: 150 },
    { text: "Que vendría a buscarla", time: 155 },
    { text: "Con sus flores amarillas", time: 160 },
    { text: "No te apures, no detengas", time: 165 },
    { text: "El instante del encuentro", time: 170 },
    { text: "Está dicho que es un hecho", time: 175 },
    { text: "No la pierdas, no hay derecho", time: 180 },
    { text: "No te olvides que la vida", time: 185 },
    { text: "Casi nunca está dormida", time: 190 },
    { text: "Ella sabía que él sabía", time: 195 },
    { text: "Él sabía, ella sabía", time: 200 },
    { text: "Que él sabía, ella sabía", time: 205 },
    { text: "Y se olvidaron de sus flores amarillas", time: 210 }

  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);