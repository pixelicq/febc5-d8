function addTodo(){
    let newelement = document.createElement("p");
    newelement.innerHTML = document.getElementById("todo").value;
    let result = document.getElementById("X");
    document.getElementById("todo").value = "";
    result.appendChild(newelement); 
    
    let newbutton = document.createElement("button");
    newbutton.innerHTML = "Delete ❌";
    newbutton.onclick = function() {
        result.removeChild(newelement);
        result.removeChild(newbutton);
    }
    newelement.appendChild(newbutton);
    newbutton.style.marginLeft = "10px";
}
