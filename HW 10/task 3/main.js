let button = document.querySelector('button');

button.onclick = function(){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = Number(document.getElementById('age').value);

    let object = {name: name, surname: surname, age: age}
    let p = document.createElement('p');
    p.innerText = `Name: ${object.name}, Surname: ${object.surname}, Age: ${object.age}`;
    document.body.appendChild(p);
}