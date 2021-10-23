let grid = 16;
drawGrid(16);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    document.body.removeChild(document.querySelector('#container'));
    
    grid = prompt("What should the dimensions of this square grid be?", 16);
    drawGrid(grid);
})

function drawGrid(grid) {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    
    for (let i = 0; i < grid; i++) {
        const div = document.createElement('div');
        for (let j = 0; j < grid; j++) {
            const divdiv = document.createElement('div');
            divdiv.addEventListener('mouseenter', () => {
                divdiv.style.backgroundColor = 'red';
            }
            );
            div.appendChild(divdiv);
        }
        container.appendChild(div);
    }
    document.body.appendChild(container);
}
