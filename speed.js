// Define units for speed conversion
var speedUnits = ["m/s", "km/h", "mile/h"];

// Populate units dropdowns
function populateSpeedUnits() {
    var fromUnitDropdown = document.getElementById("fromUnit");
    var toUnitDropdown = document.getElementById("toUnit");

    // Clear previous options
    fromUnitDropdown.innerHTML = "";
    toUnitDropdown.innerHTML = "";

    // Add new options
    speedUnits.forEach(function(unit) {
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

// Function to handle speed conversion
function convertSpeed() {
    var fromValue = parseFloat(document.getElementById("fromValue").value);
    var toValue = 0;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Conversion factors
    var factors = {
        "m/s": 2.23694,
        "km/h": 0.621371,
        "mile/h": 1
    };

    // Perform conversion
    toValue = fromValue * factors[fromUnit] / factors[toUnit];

    // Display converted value
    document.getElementById("toValue").value = toValue.toFixed(2);
}

// Initially populate the units dropdowns
populateSpeedUnits();
