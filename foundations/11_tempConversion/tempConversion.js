const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5 / 9);
  celsiusRoundedToOneDecimal = Math.round(celsius * 10) / 10;
  return celsiusRoundedToOneDecimal;
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius * (9 / 5)) + 32;
  fahrenheitRoundedToOneDecimal = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRoundedToOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
