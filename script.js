const body = document.body;

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    
    for (let j = 0; j < 16; j++) {
        const divdiv = document.createElement('div'); 
        divdiv.addEventListener('mouseenter', () => {
            divdiv.style.backgroundColor = 'red';
        }
        );
        div.appendChild(divdiv);
    }
    body.appendChild(div);
}

