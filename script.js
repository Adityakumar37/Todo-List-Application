// const { useLayoutEffect } = require("react");




function tolist(){
    let task=document.getElementById("taskinput").value;

    let tasklist=document.getElementById('tasklist')
    let li=document.createElement("li");
    li.textContent = task;
    tasklist.appendChild(li);
    document.getElementById("taskinput").value = "";


}
let btn=document.getElementById('addtask')
btn.addEventListener("click",tolist)