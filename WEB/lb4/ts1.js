function ts1() {
    let fruits = ["яблуко", "груша", "банан", "апельсин", "киві"];

    console.log(fruits)
    fruits.pop();
    console.log("1 ", fruits);

    fruits.unshift("ананас");
    console.log("2 ", fruits);

    fruits.sort((a, b) => b.localeCompare(a));
    console.log("3 ", fruits);


    let index = fruits.indexOf("яблуко");
    console.log("index ", index);
}