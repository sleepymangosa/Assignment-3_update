/*
PSEUDOCODE:
START
1. Get radius from input field
2. Validate radius (must be a positive number)
3. Calculate diameter (2 × radius)
4. Calculate circumference (2 × π × radius)
5. Calculate area (π × radius²)
6. Display results
END
*/

function calculate() {
    // Get radius from input
    let radius = Number(document.getElementById("radius").value);

    let output = document.getElementById("output");

    // Input validation
    if (isNaN(radius) || radius <= 0) {
        output.innerHTML =
        "⚠️ Please enter valid radius.";
        return;
    }

    // Calculations

    // Pi constant
    const PI = 3.14159;

    // Diameter formula
    let diameter = radius * 2;

    // Circumference formula
    let circumference = 2 * PI * radius;

    // Area formula 
    let area = PI * radius * radius;

    // Display all results
    output.innerHTML =
    "Diameter: " + diameter + "<br>" +
    "Circumference: " + circumference.toFixed(2) + "<br>" +
    "Area: " + area.toFixed(2);

}