function convertToFarenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

function convertToCelsius(fahrenheint) {
  return (fahrenheint - 32) * 5 / 9
}

function convertTemperature(degrees, unit) {
  if(unit === 'C') {
    degrees = convertToFarenheit(degrees)
    unit = 'F'
  } else if (unit === 'F') {
    degrees = convertToCelsius(degrees)
    unit = 'C'
  }

  console.log(degrees + unit)
}

convertTemperature(86, 'F')