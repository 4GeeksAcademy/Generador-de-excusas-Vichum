/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let sujeto = [
    "Pablo Motos ",
    "Mi madre ",
    "Mi primo chico ",
    "Carmen Machi ",
    "Un gato callejero ",
    "El vecino de enfrente ",
    "Mi mejor amigo ",
    "El panadero del barrio ",
    "Un extraterrestre ",
    "Una ardilla en el parque ",
    "Enrique Iglesias ",
    "El conductor del autobús ",
    "Un payaso en la fiesta ",
    "El camarero del bar ",
    "Mi jefe en el trabajo ",
    "Un perro perdido ",
    "El repartidor de pizza ",
    "Un ninja misterioso ",
    "La profesora del colegio ",
    "Un superhéroe de cómic "
  ];
  let accion = [
    "se comió ",
    "me ha roto ",
    "ha hecho desaparecer ",
    "se ha encargado de ",
    "ha encogido a ",
    "me ha robado ",
    "ha olvidado ",
    "ha pintado ",
    "se ha llevado ",
    "ha transformado ",
    "ha creado ",
    "me ha dejado ",
    "se ha perdido en ",
    "me ha llamado ",
    "ha limpiado ",
    "ha perdido ",
    "me ha dado "
  ];
  let objeto = [
    "mi móvil ",
    "mi tío ",
    "el coche ",
    "los niños ",
    "la guitarra ",
    "el perro ",
    "la casa ",
    "el ordenador ",
    "la bicicleta ",
    "mi libro favorito ",
    "el helado ",
    "la mesa ",
    "la lámpara ",
    "el balón ",
    "el árbol ",
    "mi reloj ",
    "el televisor ",
    "el piano ",
    "la planta ",
    "mi ropa "
  ];
  let tiempo = [
    "anoche",
    "el enero del año pasado",
    "esta mañana",
    "cuando yo estaba en el baño",
    "entre las 7 y las 8 del mediodía",
    "hace un rato",
    "el verano pasado",
    "la semana pasada",
    "el día de mi cumpleaños",
    "el viernes pasado",
    "hace unos meses",
    "en las vacaciones de verano",
    "el otoño pasado",
    "cuando era niño",
    "el año pasado",
    "hace poco",
    "en la tarde de ayer",
    "durante la noche",
    "cuando sonó la alarma",
    "en la última reunión",
    "esta tarde"
  ];

  const randomArrayElement = a => {
    console.log("entra");
    return a[Math.floor(Math.random() * a.length)];
  };

  document.querySelector("#excusa").innerHTML =
    randomArrayElement(sujeto) +
    randomArrayElement(accion) +
    randomArrayElement(objeto) +
    randomArrayElement(tiempo);

  document.getElementById("boton").addEventListener("click", function() {
    document.querySelector("#excusa").innerHTML =
      randomArrayElement(sujeto) +
      randomArrayElement(accion) +
      randomArrayElement(objeto) +
      randomArrayElement(tiempo);
  });
};
