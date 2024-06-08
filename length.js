// Define units for length conversion
var lengthUnits = ["m", "cm", "mm"];

// Populate units dropdowns
function populateLengthUnits() {
    var fromUnitDropdown = document.getElementById("fromUnit");
    var toUnitDropdown = document.getElementById("toUnit");

    // Clear previous options
    fromUnitDropdown.innerHTML = "";
    toUnitDropdown.innerHTML = "";

    // Add new options
    lengthUnits.forEach(function(unit) {
        var option1 = document.createElement("option");
        option1.value = unit;
        option1.textContent = unit;
        fromUnitDropdown.appendChild(option1);

        var option2 = document.createElement("option");
        option2.value = unit;
        option2.textContent = unit;
        toUnitDropdown.appendChild(option2);
    });
}

// Function to handle length conversion
function convertLength() {
    var fromValue = parseFloat(document.getElementById("fromValue").value);
    var toValue = 0;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Conversion factors
    var factors = {
        m: 1000,
        cm: 10,
        mm: 1
    };
    
    // Perform conversion
    toValue = fromValue * factors[fromUnit] / factors[toUnit];

    // Display converted value
    document.getElementById("toValue").value = toValue;
}

// Initially populate the units dropdowns
populateLengthUnits();
