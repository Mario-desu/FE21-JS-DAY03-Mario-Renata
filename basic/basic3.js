function randomizer() {
    let randomNumberTo10 = Math.floor(Math.random() * 10);
    let randomNumberTo100 = Math.floor(Math.random() * 100);
    let randomNegative = Math.floor(randomNumberTo10 * -1);
    let randomNumbers = [randomNumberTo10, randomNumberTo100, randomNegative];
    let result = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
    return result;
}

let randomNumber = Math.floor((Math.random() * 41) - 5);

console.log(randomNumber);
if (randomNumber >= -5 && randomNumber <= 10) {
    document.getElementById("cold").style.display = "block";
    document.getElementById("cold-p").innerHTML = randomNumber + " ℃: the weather is cold";
}
else if (randomNumber > 10 && randomNumber < 26) {
    document.getElementById("moderate").style.display = "block";
    document.getElementById("moderate-p").innerHTML = randomNumber + " ℃: the weather is moderate";

    // document.getElementById("moderate-p").innerHTML = `
    //     <div> <img src="https://source.unsplash.com/U5rMrSI7Pn4/400x400" alt="cold weather" class="img-fluid">
    //</div>
    //`

}
else {
    document.getElementById("hot").style.display = "block";
    document.getElementById("hot-p").innerHTML = randomNumber + " ℃: the weather is hot";

}


