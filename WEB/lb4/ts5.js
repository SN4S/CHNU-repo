function ts5() {
    let numbers = [1, 2, 3, 4, 5];

    let squaredNumbers = numbers.map(num => num ** 2);
    console.log("1. Масив чисел піднятих до квадрату:", squaredNumbers);

    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log("2. Лише парні числа:", evenNumbers);

    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("3. Сума всіх елементів масиву:", sum);

    let additionalNumbers = [6, 7, 8, 9, 10];
    numbers = numbers.concat(additionalNumbers);
    console.log("4. Початковий масив з новими елементами:", numbers);

    numbers.splice(0, 3);
    console.log("5. Масив після видалення перших 3 елементів:", numbers);
}