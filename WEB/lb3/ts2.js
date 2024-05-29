let input = document.getElementById('ts2i')

function task2(){
    console.log("//////////Task2")
    let number = input.value;
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    console.log(`Факторіал ${number} = ${factorial}`);
    console.log("///////////////")
}