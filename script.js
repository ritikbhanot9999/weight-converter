

function convertWeight() {
  // Get input values
  const value = parseFloat(document.getElementById('value').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  // Validate input
  if (isNaN(value)) {
    alert('Please enter a valid number');
    return;
  }

  // Convert to kilograms first
  let kilograms;

  switch (fromUnit) {
    case 'kg':
      kilograms = value;
      break;

    case 'lb':
      kilograms = value / 2.20462;
      break;

    case 'oz':
      kilograms = value / 35.274;
      break;

    case 'g':
      kilograms = value / 1000;
      break;

    default:
      alert('Invalid source unit');
      return;
  }

  // Convert kilograms to target unit
  let result;

  switch (toUnit) {
    case 'kg':
      result = kilograms;
      break;

    case 'lb':
      result = kilograms * 2.20462;
      break;

    case 'oz':
      result = kilograms * 35.274;
      break;

    case 'g':
      result = kilograms * 1000;
      break;

    default:
      alert('Invalid target unit');
      return;
  }

  // Format result
  result = result.toFixed(4);

  // Unit symbols
  const unitSymbols = {
    kg: 'kg',
    lb: 'lb',
    oz: 'oz',
    g: 'g'
  };

  const fromSymbol = unitSymbols[fromUnit];
  const toSymbol = unitSymbols[toUnit];

  // Icons for units
  const unitIcons = {
    kg: '⚖️',
    lb: '⚖️',
    oz: '⚖️',
    g: '⚖️'
  };

  // Display result
  const resultElement = document.getElementById('result');

  resultElement.innerHTML = `
        <span class="unit-icon">${unitIcons[fromUnit]}</span>
        ${value} ${fromSymbol} =
        <span class="unit-icon">${unitIcons[toUnit]}</span>
        ${result} ${toSymbol}
    `;

  resultElement.style.display = 'block';
}