// console.log("Hello ICQ");

function changeColor(){
    document.getElementById('Change').innerHTML="Change Now"
    document.getElementById('A').style.color="red"
}
// document.getElementById('Change').addEventListener("click",changeColor)

function hide(){
    document.getElementById('Hide').innerHTML="Hide Now"
    document.getElementById('title').style.display = "none";
}

function addElement(){
    let newelement = document.createElement("p");
    newelement.innerHTML = "ICQ";
    let result = document.getElementById("result");
    result.appendChild(newelement);
}

// function addUser(){
//     let newelement = document.createElement("p");
//     newelement.innerHTML = document.getElementById("username").value;
//     let result = document.getElementById("X");
//     result.appendChild(newelement);
//     document.getElementById("username").value = "";
// }
