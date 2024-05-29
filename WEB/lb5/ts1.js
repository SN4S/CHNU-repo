switchButton = document.getElementById("sw")
lampBulb= document.getElementsByClassName('lamp_bulb')
bright = document.getElementById('brightness')
typeChange = document.getElementById('type_sw')

let brightness = 50;
let defcolor = 'rgba(255, 255, 0)';
let timer;

function on() {
    brightness = 50
    bright.value = 50
    updBulb()
    lampBulb[0].classList.add('on')
}

function off(){
    lampBulb[0].style.boxShadow = 'none'
    lampBulb[0].classList.remove('on')
}

switchButton.addEventListener('click', ()=>{
if(lampBulb[0].classList.contains('on'))off();
else on();
})

bright.addEventListener('input', (event) =>{
    brightness = event.target.value
    //if(brightness==0) off();
    if(lampBulb[0].classList.contains('on'))updBulb()
    reset()
})

typeChange.addEventListener('click', ()=>{
    if (lampBulb[0].classList.contains('led')) {lampBulb[0].classList.remove('led');
    defcolor = 'rgba(255, 255, 0)';
    updBulb()}
    else {lampBulb[0].classList.add('led');
    defcolor= 'rgba(255, 255, 255)';
    updBulb()}
    reset()
})

function updBulb(){
    lampBulb[0].style.boxShadow = '0px 0px ' + brightness +'px ' + brightness + 'px '+ defcolor;
    reset()
}

function reset(){
    clearTimeout(timer)
    timer = setTimeout(off,8000)
}