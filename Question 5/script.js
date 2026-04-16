/*
PSEUDOCODE:
START
1. Get 5 numbers from input fields
2. Validate inputs
3. Find smallest number
4. Find largest number
5. Display results
END
*/

function calculate() {
    // Get values
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    let n4 = Number(document.getElementById("num4").value);
    let n5 = Number(document.getElementById("num5").value);

    let output = document.getElementById("output");

    // Validation
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
        output.innerHTML =
        "⚠️ Please enter all 5 numbers.";
        return;
    }

    // Find smallest and largest
    let smallest = Math.min(n1, n2, n3, n4 ,n5);
    let largest = Math.max(n1, n2 , n3, n4, n5);

    // Display all results
    output.innerHTML =
    "Smallest: " + smallest + "<br>" +
    "Largest: " + largest;
}