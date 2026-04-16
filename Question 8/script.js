function generateTable() {
    let output = document.getElementById("output");

    // Start with the table header
    let table = "<table>";
    table += "<tr><th>Integer</th><th>Square</th><th>Cube</th></tr>";

    // Loop from 0 - 10
    for (let i = 0; i <= 10; i++) {
        // Calculate square and cube for each number
        let square = i * i;
        let cube = i * i * i;

        // Add a new row to the table for each number
        table += "<tr><td>" + i + "</td><td>" + square + "</td><td>" + cube + "</td></tr>";
    }

    // Close the table
    table += "</table>";

    // Display the table
    output.innerHTML = table;
}
