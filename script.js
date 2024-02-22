
function convertirTemperatura() {
    let temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

    if (!isNaN(temperaturaCelsius)) {
        
        let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
        let temperaturaKelvin = temperaturaCelsius + 273.15;

        console.log("Temperatura en grados Fahrenheit:", temperaturaFahrenheit.toFixed(2));
        console.log("Temperatura en Kelvin:", temperaturaKelvin.toFixed(2));

    } else {
        console.log("Error: La temperatura ingresada no es válida.");
    }
}
