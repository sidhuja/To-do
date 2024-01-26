const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if (inputBox.value == ''){
        alert("Must enter something!");
    }
    else{
        let li = document.createElement("li");
        // set the innter HTML contnent of li to value in input box
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // adds cross icon in span tag 
        // inline element 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // x character
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// delete
// in the list container, add listner on click
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // if clicked on the LI tag, then add checked class name, if already there, then 
        // remove that 
        e.target.classList.toggle("checked");
    }
    // if click on span 
    else if(e.target.tagName === "SPAN"){
        // deletes pe which is the LI element
        e.target.parentElement.remove();
       
    }
    saveData();
// 
}, false);

// save 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    // gets all contnent stored in browser with name "data"
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
