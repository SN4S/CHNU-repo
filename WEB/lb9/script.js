let arr = []
let sortenable = false


document.addEventListener("DOMContentLoaded", function (evt){
   // if(!localStorage.getItem("login")){
   //     alert("You are not loged in!")
    //    location.href="lb9.html";
   // }
    console.log('1')
    download()
} );
// window.onscroll = function(ev) {
//     if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight && sortenable=false) {
//         download()
//     }
// };



function download(count=20){

    list = document.getElementsByClassName('list')[0]
    for (let i = 0;i<20;i++){
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                arr.push(data["results"][0])

                addCard(list,data["results"][0])
            }
        });
    }
    console.log(arr)
}


function renderer(arra){
    console.log('3')
    list = document.getElementsByClassName('list')[0]
    list.innerHTML = "";
    console.log('4')
    console.log(arra.length)
    for (let i=0;i<arra.length;i++){
        console.log()
        addCard(list,arra[i])
    }
}

function addCard(parentElement, data) {
    var cardHTML = `
        <div class="card">
                <div class="titleb">${data["name"]["first"]} ${data["name"]["last"]}</div>
                <div class="info">
                    <img src="${data["picture"]["large"]}" alt="${data["name"]["first"]} ${data["name"]["last"]}">
                    <p>I am ${data["dob"]["age"]} years old</p>
                    <p>${data["email"]}</p>
                    <p>${data["cell"]}</p>
                    <p>${data["location"]["city"]}</p>
                    
                </div>

                <div class="bott">${data["gender"].toUpperCase()}</div>

            </div>
    `;
    parentElement.innerHTML += cardHTML;
    console.log('4')
}

document.getElementById("nameup").addEventListener("click",function (evt){
    let sorted = arr.sort((a, b) => a.name.first.localeCompare(b.name.first));

    renderer(sorted)
})

document.getElementById("namedwn").addEventListener("click",function (evt){
    let sorted = arr.sort((a, b) => b.name.first.localeCompare(a.name.first));

    renderer(sorted)
})

document.getElementById("ageup").addEventListener("click",function (evt){
    let sorted = arr.sort(function (a, b){return a.dob.age - b.dob.age});

    renderer(sorted)
})

document.getElementById("agedwn").addEventListener("click",function (evt){
    let sorted = arr.sort(function (a, b){return b.dob.age - a.dob.age});

    renderer(sorted)
})

document.getElementById("fltage").addEventListener("click",function (evt){
    let filterd = arr.f(function (a, b){return b.dob.age - a.dob.age});

    renderer(filterd)
})