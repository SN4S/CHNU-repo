function sumOfEvenNumbers(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    console.log(sum)
}

function task4(){
    console.log("/////////////Task4")
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sumOfEvenNumbers(arr);
    console.log("//////////////////")
}