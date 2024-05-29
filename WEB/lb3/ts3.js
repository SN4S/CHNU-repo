let input2 = document.getElementById('ts3i')

function task3() {
    console.log("///////////////Task3")

    let monthNumber = parseInt(input2.value)
    switch (monthNumber) {
        case 1:
            console.log("Січень");
            break;
        case 2:
            console.log("Лютий");
            break;
        case 3:
            console.log("Березень");
            break;
        case 4:
            console.log("Квітень");
            break;
        case 5:
            console.log("Травень");
            break;
        case 6:
            console.log("Червень");
            break;
        case 7:
            console.log("Липень");
            break;
        case 8:
            console.log("Серпень");
            break;
        case 9:
            console.log("Вересень");
            break;
        case 10:
            console.log("Жовтень");
            break;
        case 11:
            console.log("Листопад");
            break;
        case 12:
            console.log("Грудень");
            break;
        default:
            console.log("error");
    }
    console.log("///////////////")
}