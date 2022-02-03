let ejercicio = document.getElementById("ejercicio");
let sostén = document.getElementById("sostén");
let repeticiones = document.getElementById("repeticiones");
let repTítulo = document.getElementById("repTítulo");
let sosTítulo = document.getElementById("sosTítulo");
let rowRutina = document.getElementById("rowRutina");
let series = document.getElementById("series");
let btn = document.getElementById("btn");
let imgs = document.getElementsByClassName("imgsDiv");
let nTimer = document.getElementById("nTimer");
let btnTimer = document.getElementById("btnTimer");
let btnMusic = document.getElementById("btnMusic");

//Timer

var interval;

let enCountdown = false;

function cuentaRegresiva() {
  new Promise(function (resolve) {
    if (enCountdown == false) {
      const minutosComienzo = 60;
      let tiempo = minutosComienzo * 60;
      let segundosTotales = 61;

      interval = setInterval(timer, 1000);

      function timer() {
        do {
          let minutos = Math.floor(tiempo / 60);
          let segundos = tiempo % 60;

          if (segundos < 10) {
            segundos = "0" + segundos;
          }

          nTimer.innerHTML = `${minutos}:${segundos}`;
          enCountdown = true;
          btnTimer.innerHTML = '<i class="far fa-stop-circle"></i>';
          tiempo--;
          segundosTotales--;
        } while (tiempo < -1);
        if (segundosTotales == 0) {
          nTimer.innerHTML = `60:00`;
          clearTimeout(interval);
          enCountdown = false;
          btnTimer.innerHTML = '<i class="far fa-play-circle"></i>';
        }
      }
    } else {
      clearTimeout(interval);
      enCountdown = false;
      btnTimer.innerHTML = '<i class="far fa-play-circle"></i>';
    }
  });
}

btnTimer.addEventListener("click", function () {
  cuentaRegresiva();
});

//App

function selected() {
  if (repeticiones.disabled == true) {
    repeticiones.classList.add("selected");
    repTítulo.classList.add("selected");
    sostén.classList.remove("selected");
    sosTítulo.classList.remove("selected");
  } else if (repeticiones.disabled == false) {
    repeticiones.classList.remove("selected");
    repTítulo.classList.remove("selected");
    sostén.classList.add("selected");
    sosTítulo.classList.add("selected");
  }
}

function disable() {
  if (
    ejercicio.value == "S. en pared" ||
    ejercicio.value == "A una pierna en pared" ||
    ejercicio.value == "Elevación de pierna" ||
    ejercicio.value == "Equilibrio"
  ) {
    repeticiones.disabled = true;
    sostén.disabled = false;
    selected();
  } else {
    repeticiones.disabled = false;
    sostén.disabled = true;
    selected();
  }
}

const crearCardxRep = () => {
  let nuevaCardxRep = `
					<div class="card nuevaCard">
						<i class="far fa-times-circle"></i>
						<div class='imgsDiv'></div>
						<h2>${ejercicio.value}</h2>
						<h4>${series.value + " - " + repeticiones.value}</h4>
					</div>
	`;
  return nuevaCardxRep;
};

const crearCardxSost = () => {
  let nuevaCardxSost = `
		<div class="card nuevaCard">
						<i class="far fa-times-circle"></i>
						<div class='imgsDiv'></div>
						<h2>${ejercicio.value}</h2>
						<h4>${series.value + " - " + sostén.value}</h4>
					</div>
	`;
  return nuevaCardxSost;
};

function vacío() {
  ejercicio.value = "ElijaE";
  series.value = "ElijaSe";
  repeticiones.value = "ElijaR";
  sostén.value = "ElijaSo";
}

let contadorCards = 0;

function cardRep() {
  rowRutina.innerHTML += crearCardxRep();
  vacío();
  contadorCards++;
}

function cardSost() {
  rowRutina.innerHTML += crearCardxSost();
  vacío();
  contadorCards++;
}

btn.addEventListener("click", function () {
  if (
    contadorCards <= 11 &&
    ejercicio.value != "ElijaE" &&
    series.value != "ElijaSe" &&
    repeticiones.value != "ElijaR"
  ) {
    switch (ejercicio.value) {
      case "Sentadillas":
        cardRep();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/sentadillas.jpg" class="imgs">';
        break;

      case "S. a una pierna":
        cardRep();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/s.unapierna.jpg" class="imgs">';
        break;

      case "Estocadas":
        cardRep();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/estocada.png" class="imgs">';
        break;

      case "Medio puente":
        cardRep();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/mediopuente.jpg" class="imgs">';
        break;

      case "Patada de glúteo":
        cardRep();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/patadaglúteo.jpg" class="imgs">';
        break;

      case "Subida a cajón":
        cardRep();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/subida.jpg" class="imgs">';
        break;

      case "Abductores":
        cardRep();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/abductores.jpg" class="imgs">';
        break;

      case "Aductores":
        cardRep();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/aductores.jpg" class="imgs">';
        break;
    }
  } else if (
    contadorCards <= 11 &&
    ejercicio.value != "ElijaE" &&
    series.value != "ElijaSe" &&
    sostén.value != "ElijaSo"
  ) {
    switch (ejercicio.value) {
      case "S. en pared":
        cardSost();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/s.pared.jpg" class="imgs">';
        break;

      case "A una pierna en pared":
        cardSost();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/s.unapiernapared.jpg" class="imgs">';
        break;

      case "Elevación de pierna":
        cardSost();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/elevación.jpg" class="imgs">';
        break;

      case "Equilibrio":
        cardSost();
        imgs[contadorCards - 1].innerHTML =
          '<img src="img/equilibrio.jpg" class="imgs">';
        break;
    }
  }
});

rowRutina.addEventListener("click", function (e) {
  if (e.target.localName == "i") {
    e.target.parentNode.remove();
    contadorCards--;
  }
});
