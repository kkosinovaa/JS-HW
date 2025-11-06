const tableGeneration = document.forms['tableGeneration'];

const table = document.querySelector('table');

tableGeneration.onsubmit = function (event) {
    table.innerHTML = '';
    event.preventDefault();
    const linesValue = +tableGeneration.lines.value;
    const cellsValue = +tableGeneration.cells.value;
    const cells_insideValue = tableGeneration.cells_inside.value;
    console.log(linesValue, cellsValue, cells_insideValue);

    for(let i = 0; i < linesValue; i++){
        const tr = document.createElement('tr');

        for (let i = 0; i<cellsValue; i++){
            const td = document.createElement('td');
            td.innerText = cells_insideValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}