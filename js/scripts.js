function convert(temperature) {
  return (temperature * (9/5)) + 32;
}

const celsius = parseInt(prompt("Enter degrees in celsius:"));

alert(convert(celsius));