const ftoc = function(fahrenheit) {
  let temperature = (fahrenheit-32)*(5/9)
  return Math.round(temperature * 10) / 10
};

const ctof = function(celsius) {
  let temperature = celsius*(9/5)+32
  return Math.round(temperature * 10) / 10
};

module.exports = {
  ftoc,
  ctof
};
