let input = document.getElementById('kg');
let output = document.getElementById('result');

input.oninput = () => {
    let result = input.value;
    const pounds = result*2.2;
    output.innerHTML = `<p>${pounds}</p>`;
}