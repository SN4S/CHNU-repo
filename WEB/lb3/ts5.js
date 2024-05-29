let input3 = document.getElementById('ts5i')

const leters = (str) =>{
    let count = 0;
    let lowerStr = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }

    return count;
}
function task5() {
    console.log("//////////Task5")
    let res = leters(input3.value)
    console.log(res)
    console.log("//////////////////")
}