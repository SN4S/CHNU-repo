const redColor = document.getElementById('red');
const yellowColor = document.getElementById('yellow');
const greenColor = document.getElementById('green');

const colors = {
    red: 'red',
    yellow: 'yellow',
    green: 'green',
    fl_yellow: 'fl_yellow'
};

let currentColor = colors.red;

const setDurationsButton = document.querySelector('.durbutton');
const nextColorButton = document.querySelector('.nextbutton');
const trafficText = document.querySelector('.trafic-text');

let durations = {
    red: 5000,
    yellow: 3000,
    green: 7000,
    fl_yellow: 3000,

    setDurations: function (redDuration, yellowDuration, greenDuration) {
        this.red = redDuration;
        this.fl_yellow = this.yellow = yellowDuration;
        this.green = greenDuration;
    },
};
const colorsByClasses = {
    red: redColor,
    yellow: yellowColor,
    green: greenColor,
    fl_yellow: yellowColor,
}

const nextColor = {
    [colors.red]: colors.yellow,
    [colors.yellow]: colors.green,
    [colors.green]: colors.fl_yellow,
    [colors.fl_yellow]: colors.red,
};

let trafficLightTimes;
let flashingTimeout;
let flashingInterval;
const disableAllLights = () => {
    for (const colorKey in colorsByClasses) {
        colorsByClasses[colorKey].classList.remove('active');
    }
}

const trafficLightwork = (currentColor) => {
    trafficText.textContent = currentColor;
    if (currentColor !== 'stop') {
        if (currentColor !== colors.fl_yellow) {
            trafficLightTimes = setTimeout(() => {
                disableAllLights()
                colorsByClasses[currentColor].classList.add('active');
                trafficLightwork(currentColor);
            }, durations[currentColor]);
        } else {
            trafficLightTimes = setTimeout(() => {
                disableAllLights()
                flashingInterval = setInterval(() => {
                    colorsByClasses[colors.fl_yellow].classList.toggle('active');
                }, 500);
                flashingTimeout = setTimeout(() => {
                    clearInterval(flashingInterval);
                    colorsByClasses[colors.red].classList.add('active');
                    trafficLightwork(currentColor);
                }, durations[currentColor]);
            });
        }
    } else {
        clearTimeout(trafficLightTimes);
        clearInterval(flashingInterval);
        clearTimeout(flashingTimeout);
    }
    currentColor = nextColor[currentColor];
}

setDurationsButton.addEventListener('click', () => {
    let  redDuration = parseInt(prompt('Input red', 5000));
    let  yellowDuration = parseInt(prompt('Input yellow', 3000));
    let  greenDuration = parseInt(prompt('Input green', 3000));

    if( !isNaN(redDuration) && !isNaN(yellowDuration) && !isNaN(greenDuration)) {
        durations.setDurations(redDuration,yellowDuration, greenDuration);
    }else {
        alert('Err!');
    }
});

nextColorButton.addEventListener('click', () => {
    trafficLightwork('stop');
    currentColor = nextColor[currentColor];
    disableAllLights()
    colorsByClasses[currentColor].classList.add('active');
    trafficLightwork(currentColor);
})

trafficLightwork(currentColor);