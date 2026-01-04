// const { useLayoutEffect } = require("react");




function tolist(){

    let task=document.getElementById("taskinput").value;

    let tasklist=document.getElementById('tasklist')
    let li=document.createElement("li");

    if (task==""){
        alert("Add item ")
    }
    li.textContent = task;
    tasklist.appendChild(li);
    document.getElementById("taskinput").value = "";


}

let rem=document.getElementById('clearll')


let btn=document.getElementById('addtask')
btn.addEventListener("click",tolist)