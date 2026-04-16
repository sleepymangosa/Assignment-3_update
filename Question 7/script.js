function checkMultiple() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let output = document.getElementById("output");

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        output.innerHTML = "⚠️ Enter valid numbers.";
        return;
    }

    // Prevent division by zero
    if (num2 === 0) {
        output.innerHTML = "⚠️ Cannot divide by zero."
        return;
    }

    // Check multiple
    if (num1 % num2 === 0) {
        output.innerHTML = num1 + " is a multiple of " + num2;
    } else {
        output.innerHTML = num1 + " is NOT a multiple of " + num2;
    }
}