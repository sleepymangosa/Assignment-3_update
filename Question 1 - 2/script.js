/*
PSEUDOCODE:
START
1. Get first number
2. Get second number
3. Validate inputs
4. Perform calculations
5. Display results accessibly
END
*/
function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    
    let output = document.getElementById("output");

    // Input validation (Accessibility + usability)
    if (isNaN(num1) || isNaN(num2)) {
    output.innerHTML = "⚠️ Please enter valid numbers.";
    return;
    }

// Prevent division by zero
    if (num2 === 0) {
    output.innerHTML = "⚠️ Cannot divide by zero.";
    return;
    }

// Calculations
    let sum = num1 + num2;
    let product = num1 * num2;
    let difference = num1 - num2;
    let quotient = (num1 / num2).toFixed(2);

    // Question 2: 
    // Displays the largest number by complaring the 4 inputs
    let larger;
    if (num1 > num2) {
        larger = num1;
    } else {
        larger = num2;
    }

// Output results
    if (num1 === num2) {
        output.innerHTML =
            "Sum: " + sum + "<br>" +
            "Product: " + product + "<br>" +
            "Difference: " + difference + "<br>" +
            "Quotient: " + quotient + "<br>" +
            "These numbers are equal";
    } else {
        output.innerHTML =
            "Sum: " + sum + "<br>" +
            "Product: " + product + "<br>" +
            "Difference: " + difference + "<br>" +
            "Quotient: " + quotient + "<br>" +
            larger + " is larger";
    }
}