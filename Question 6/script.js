function checkEvenOdd() {
    let num = Number(document.getElementById("num").value);
    let output = document.getElementById("output");

    // Validation
    if (isNaN(num)) {
        output.innerHTML =
        "⚠️ Please enter a valid number.";
        return;
    }

    // Even or Odd
    if (num % 2 == 0) {
        output.innerHTML = num + " is Even"
    } else {
        output.innerHTML = num + " is Odd"
    }
}