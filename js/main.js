document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calculator-form");
    const calculateButton = document.getElementById("calculo");
    const resultadoSpan = document.getElementById("resultado");

    calculateButton.addEventListener("click", function(event) {
        event.preventDefault();

        const age = parseFloat(document.getElementById("form_age").value);
        const height = parseFloat(document.getElementById("form_height").value);
        const weight = parseFloat(document.getElementById("form_Wweight").value);
        const activityLevel = parseFloat(document.getElementById("form_activity").value);

        // Perform calorie calculation based on the provided formula
        const basalMetabolicRate = 10 * weight + 6.25 * height - 5 * age;
        const totalCalories = basalMetabolicRate * activityLevel;

        resultadoSpan.textContent = totalCalories.toFixed(2);
    });
});





