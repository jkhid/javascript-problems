const convertToCelsius = function(temp) {
  let conversion = (temp - 32) * 5/9;
  let roundedConv = parseFloat(conversion.toFixed(1));
  if (roundedConv === 0) {
    return 0;
  }
  return roundedConv;
};

const convertToFahrenheit = function(temp) {
  let conversion = (temp * 9/5 + 32);
  let roundedConv = parseFloat(conversion.toFixed(1));
  return roundedConv;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
