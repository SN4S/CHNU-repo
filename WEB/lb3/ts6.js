let bas= document.getElementById('ts6b')
let exp = document.getElementById('ts6e')

const pow = (base, exponent)=> Math.pow(base, exponent)

function task6() {
    console.log("///////////Task6")
    let res = pow(bas.value, exp.value)
    console.log(res)
    console.log("////////////////")
}