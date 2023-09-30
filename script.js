document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const kelvinOutput = document.getElementById("kelvin");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const rankineOutput = document.getElementById("rankine");

    celsiusInput.addEventListener("input", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const kelvin = celsius + 273.15;
            const fahrenheit = (celsius * 9/5) + 32;
            const rankine = (celsius + 273.15) * 9/5;
            kelvinOutput.textContent = kelvin.toFixed(2);
            fahrenheitOutput.textContent = fahrenheit.toFixed(2);
            rankineOutput.textContent = rankine.toFixed(2);
        } else {
            kelvinOutput.textContent = "0";
            fahrenheitOutput.textContent = "0";
            rankineOutput.textContent = "0";
        }
    });
});
