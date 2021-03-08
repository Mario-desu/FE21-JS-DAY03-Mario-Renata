function randomizer() {
    let randomNumberTo10 = Math.floor(Math.random() * 10);
    let randomNumberTo100 = Math.floor(Math.random() * 100);
    let randomNegative = Math.floor(randomNumberTo10 * -1);
    let randomNumbers = [randomNumberTo10, randomNumberTo100, randomNegative];
    let result = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
    return result;
}

let randomNumber = randomizer();


if (randomNumber >= -5 && randomNumber <= 10) {
    document.getElementById("temperature").innerHTML = randomNumber+" C: the weather is cold";
}
else  if  (randomNumber > 10 && randomNumber < 26) {
    document.getElementById("temperature").innerHTML =randomNumber+ " C: the weather is moderate";
}
