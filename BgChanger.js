let container = document.getElementById('container');
let change = document.getElementById('change');
let changeCombo = document.getElementById('changeCombo');

change.addEventListener('click',()=>{
    let green = Math.floor(Math.random() * 256);
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red},${green},${blue})`;
    container.style.background = color;
});

changeCombo.addEventListener('click',function(){
    let green1 = Math.floor(Math.random() * 256);
    let red1 = Math.floor(Math.random() * 256);
    let blue1 = Math.floor(Math.random() * 256);
    let color1 = `rgb(${red1},${green1},${blue1})`;
    
    let green2 = Math.floor(Math.random() * 256);
    let red2 = Math.floor(Math.random() * 256);
    let blue2 = Math.floor(Math.random() * 256);
    let color2 = `rgb(${red2},${green2},${blue2})`;
    container.style.background = `linear-gradient(${color1},${color2})`;
});
