//Programa:
//Calcular tiempo de espera promedio segun la cantidad de turnos registrados.
//Dato: El odontologo nos dijo que iba a estar media hora con cada paciente.
//Horario de atencion: 8 am a 12 am y 1 pm a 5 pm

//Ejecución sin Narrow Functions
/*
let pacientes = 0;
const tiempoDeTurnos = 0.5;
let tiempoDeEspera = 0.0;

while (1 === 1) {
  pacientes += sacarNuevosTurnos();
  tiempoDeEspera = sacarTiempoDeEspera(pacientes);
  alert(
    `Hay ${pacientes} pacientes en la lista de espera. El tiempo de espera es de ${tiempoDeEspera} horas`
  );
}

function sacarNuevosTurnos() {
  return parseInt(
    prompt("Por favor, ingrese la cantidad de turnos que quiere sacar")
  );
}

function sacarTiempoDeEspera(x) {
  return x * tiempoDeTurnos;
}
*/

//Ejecución con Narrow Functions
let pacientes = 0;
const tiempoDeTurnos = 0.5;
const tiempoDeEspera = (pacientes) => pacientes * tiempoDeTurnos;
const sacarNuevosTurnos = () =>
  parseInt(prompt("Por favor, ingrese la cantidad de turnos que quiere sacar"));

while (1 === 1) {
  pacientes += sacarNuevosTurnos();
  alert(
    `Hay ${pacientes} pacientes en la lista de espera. El tiempo de espera es de ${tiempoDeEspera(
      pacientes
    )} horas`
  );
}
