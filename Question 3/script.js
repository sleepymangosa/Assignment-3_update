/*
PSEUDOCODE:
START
1. Get three numbers from input fields
2. Validate inputs
3. Calculate sum, average, product, smallest, largest
4. Display results
END
*/

function calculate() {
    // Get the three input values
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    let output = document.getElementById("output");

    // Input validation
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        output.innerHTML = "⚠️ Please enter valid numbers.";
        return;
    }

    // Calculate sum
    let sum = num1 + num2 + num3;

    // Calculate average by dividing sum by 3
    let average = (sum / 3).toFixed(2);

    // Calculate product
    let product = num1 * num2 * num3;

    // Find smallest number using Math.min
    let smallest = Math.min(num1, num2, num3);

    // Find largest number using Math.max
    let largest = Math.max(num1, num2, num3);

    // Display all results
    output.innerHTML = 
    "Sum: " + sum + "<br>" +
    "Average: " + average + "<br>" +
    "Product: " + product + "<br>" +
    "Smallest: " + smallest + "<br>" +
    "Largest: " + largest;
}