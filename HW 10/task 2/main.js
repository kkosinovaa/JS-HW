let input = document.querySelector('input');
let button = document.querySelector('button');
button.onclick = () => {
    let age = Number (input.value);
    if(age >= 18){
        console.log('Okay');
    } else if(age < 18){
        console.log('You are too young');
    }
}