let currentNumber = +localStorage.getItem('number');

currentNumber += 1;

localStorage.setItem('number', currentNumber);

let div = document.getElementById('target');
div.innerText = currentNumber;