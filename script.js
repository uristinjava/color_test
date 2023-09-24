const colorsArr = [
    'red',
    'green',
    'blue',
    'black',
    'yellow',
    'grey',
    'violet',
    'brown'
];

const colorBox = document.querySelector('.color-box');

const btnBox = document.querySelector('.btn-box');
const btn = document.querySelector('.btn');
const formInput = document.querySelector('.form');
const form = document.querySelector('.form')


const newArr = colorsArr.map(e => {
    return `
        <div class = 'color' style = 'background-color:${e}' data-color ='${e}'>
        </div>
    `
})


colorBox.innerHTML = newArr.join('');
const colorsEl = document.querySelectorAll('.color');

let arrColor = [];

btn.addEventListener('click', e => {
    e.preventDefault();
    if (arrColor.length == colorsArr.length) {
        console.log(arrColor)
    }
})



colorsEl.forEach(el => {

    el.addEventListener('click', e => {
        e.preventDefault();
        e.target.classList.add('visible');
        const colorSquer = e.target.dataset.color;
        arrColor.push(colorSquer);
        if (arrColor.length === newArr.length) {

            colorBox.classList.add('hidden')
            btnBox.classList.remove('visible');
            btn.classList.remove('visible');

            const renderInput = (arrColor) => {
                return `
            
            <input class="input"
            type="text"
            name="userColors"
            value=${arrColor}
            style ='opacity: 0' 
            >
            <input class="input" 
            type="text" 
            name="userName" 
            placeholder="ваше имя">
            <input class="input" 
            type="email" 
            name="userEmail" 
            placeholder="email для связи">
            `}
            btnBox.innerHTML = renderInput(arrColor)
        }
    });
});













