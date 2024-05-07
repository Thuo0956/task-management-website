let inputBox=document.getElementById("input-box");
let listcontainer=document.getElementById("list-container");
function addTask(){
     if(inputBox.value === ''){
        alert("Don't be that lazy add a task :)");
     }
     else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span)
     }
     inputBox.value="";
     saveData();
}
listcontainer.addEventListener("click", function(e) {
   if (e.target.tagName === "LI") {
       e.target.classList.toggle("checked");
       saveData();
   } else if (e.target.tagName === "SPAN") {
       e.target.parentElement.remove();
       saveData();
   }
},false);
function saveData() {
   localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
   var storedData = localStorage.getItem("data");
   if (storedData) {
       listcontainer.innerHTML = storedData;
   }
}

showTask();

