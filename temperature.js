// Define units for temperature conversion
var temperatureUnits = ["C", "F", "K"];

// Populate units dropdowns
function populateTemperatureUnits() {
    var fromUnitDropdown = document.getElementById("fromUnit");
    var toUnitDropdown = document.getElementById("toUnit");

    // Clear previous options
    fromUnitDropdown.innerHTML = "";
    toUnitDropdown.innerHTML = "";

    // Add new options
    temperatureUnits.forEach(function(unit) {
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

// Function to handle temperature conversion
function convertTemperature() {
    var fromValue = parseFloat(document.getElementById("fromValue").value);
    var toValue = 0;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Perform conversion
    if (fromUnit === "C") {
        if (toUnit === "F") {
            toValue = (fromValue * 9/5) + 32;
        } else if (toUnit === "K") {
            toValue = fromValue + 273.15;
        }
    } else if (fromUnit === "F") {
        if (toUnit === "C") {
            toValue = (fromValue - 32) * 5/9;
        } else if (toUnit === "K") {
            toValue = (fromValue + 459.67) * 5/9;
        }
    } else if (fromUnit === "K") {
        if (toUnit === "C") {
            toValue = fromValue - 273.15;
        } else if (toUnit === "F") {
            toValue = (fromValue * 9/5) - 459.67;
        }
    }

    // Display converted value
    document.getElementById("toValue").value = toValue;
}

// Initially populate the units dropdowns
populateTemperatureUnits();
