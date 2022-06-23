let desk = document.getElementById('area');
let div;
let rows;
let columns;
let error = document.querySelector('.error');

column.oninput = () => {
    columns = column.value;
    if (columns <= 0) {
        error.innerHTML = "Введенное число должно быть больше нуля!";
    }
    if (columns > 0) {
        error.innerHTML = "";
    }
    build()
}
row.oninput = () => {
    rows = row.value;
    if (rows <= 0) {
        error.innerHTML = "Введенное число должно быть больше нуля!";
    }
    if (rows > 0) {
        error.innerHTML = "";
    }
    build()

}
function build () {
    desk.innerHTML = '';
    for (let i = 0; i < rows; i++ ) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('display');
        area.append(wrapper);
            for (let j = 0; j < columns; j++) {
                div = document.createElement('div');
                wrapper.append(div);
                if (i % 2 !== 0) {
                    if (j % 2 !== 0) {
                        div.classList.add('white', 'block');
                    } else {
                        div.classList.add('black', 'block');
                    } 
                } else if (j % 2 == 0) {
                    div.classList.add('white', 'block');
                } else {
                    div.classList.add('black', 'block');
            }  
        }
    }
}

desk.onclick = function () {
    let chess = document.querySelectorAll('.block');
    for (let cell of chess) {
        if (cell.classList.contains('white')) {
            cell.classList.remove('white');
            cell.classList.add('black');
        } else if (cell.classList.contains('black')) {
            cell.classList.remove('black');
            cell.classList.add('white');
        }
    }   
}









