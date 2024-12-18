const unitSelect = document.getElementById("unit");
const convertOptions = document.getElementById("conveter-options");
const radioButton = document.getElementById("radio-buttons");
const resultDisplay = document.getElementById("result");
const submitBtn = document.getElementById("btn");

unitSelect.addEventListener("change", () => {
  const selectedUnit = unitSelect.value;

  // Reset all previously displayed elements
  convertOptions.classList.add("hidden");
  radioButton.classList.add("hidden");
  submitBtn.classList.add("hidden");
  resultDisplay.textContent = "";
  radioButton.innerHTML = ""; // Clear any previously added radio buttons

  if (selectedUnit) {
    // Show the input field for entering values
    convertOptions.classList.remove("hidden");

    // Define the conversion options for each unit type
    const unitOptions = {
      Mass: [
        { label: "Kilograms (KG)", value: "kg" },
        { label: "Pounds (LBS)", value: "lbs" },
      ],
      Length: [
        { label: "Centimeters (CM)", value: "cm" },
        { label: "Meters (M)", value: "m" },
      ],
      Temperature: [
        { label: "Celsius (C)", value: "c" },
        { label: "Fahrenheit (F)", value: "f" },
      ],
    };

    // Add appropriate radio buttons for the selected unit
    const options = unitOptions[selectedUnit];
    options.forEach(option => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="convert" value="${option.value}"> ${option.label}`;
      radioButton.appendChild(label);
    });

    // Show the radio buttons and the submit button
    radioButton.classList.remove("hidden");
    submitBtn.classList.remove("hidden");
  }
});

// Handle the submission logic
submitBtn.addEventListener("click", () => {
  const value = parseFloat(document.getElementById("value-input").value);
  const conversionType = document.querySelector('input[name="convert"]:checked')?.value;

  if (!value || !conversionType) {
    resultDisplay.textContent = "Please enter a value and select a conversion type.";
    return;
  }

  let result;
  switch (conversionType) {
    // Mass conversions
    case "kg":
      result = value * 0.001; // Example: grams to kilograms
      break;
    case "lbs":
      result = value * 2.20462; // Example: kilograms to pounds
      break;

    // Length conversions
    case "cm":
      result = value * 100; // Example: meters to centimeters
      break;
    case "m":
      result = value / 100; // Example: centimeters to meters
      break;

    // Temperature conversions
    case "c":
      result = (value - 32) * (5 / 9); // Fahrenheit to Celsius
      break;
    case "f":
      result = value * (9 / 5) + 32; // Celsius to Fahrenheit
      break;

    default:
      resultDisplay.textContent = "Conversion type not recognized.";
      return;
  }

  resultDisplay.textContent = `Converted Value: ${result.toFixed(2)}`;
});
