const cafe = {
    alarmActiva: "Alarma: ACTIVA",
    alarmINActiva: "Alarma: INACTIVA",
    nivelWater: "Optimo", //El nivel de agua va ligado a un sensor
    TempRange: {
        barra: function () {
            let Temperatures = document.getElementById("TempRange");
            document.getElementById("TempSelect").innerHTML = Temperatures.value + " °C"; //Temperatura seleccionada
        }
    },
    botones: {
        onCafe: function () {
            let alarmCafe = document.getElementById("alarmActiva");
            alarmCafe.innerHTML = cafe.alarmActiva; //Status de alarma café
            let alarmas = document.getElementById("HoraSelect");
            document.getElementById("HoraCafe").innerHTML = alarmas.value; //Hora del café
        },
        offCafe: function () {
            let alarmCafe = document.getElementById("alarmActiva");
            alarmCafe.innerHTML = cafe.alarmINActiva; //Alarma desactivada
            let alarmas = document.getElementById("HoraSelect");
            document.getElementById("HoraCafe").innerHTML = "OFF"; //Hora de café desactivada
        }
    }
};
let nivelWaterCafe = document.getElementById("nivelWater");
document.getElementById("nivelWater").innerHTML = cafe.nivelWater;
