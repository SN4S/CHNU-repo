let arr = []
let sortenable = false


document.addEventListener("DOMContentLoaded", function (evt){
    if(!localStorage.getItem("login")){
        alert("You are not loged in!")
        location.href="lb9.html";
    }
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
}

function renderer(){
    console.log('3')
    list = document.getElementsByClassName('list')[0]
    console.log('4')
    console.log(arr.length)
    for (let i=0;i<arr.length;i++){
        console.log()
        addCard(list,arr[i])
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

function sort(){
    let sortedarr = []
}