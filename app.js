var todoList = document.getElementById("todoList"); //get ul element

var item = document.getElementById("itemCount"); 

var count = 0;
item.innerHTML = count;


// function for Add list 
function addItem(){
    var input = document.getElementById("input"); // get input element
if(input.value.length >= 5 && input.value.length <= 20){
    var li = document.createElement("li"); //creating li 

    var liText = document.createTextNode(input.value);
    
    li.appendChild(liText);


    //creating delete button
    var delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    li.appendChild(delbtn);
    delbtn.setAttribute("onclick", "deleteList(this)");
    delbtn.setAttribute("class", "btn")

   //creating Edited button
    var editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit"
    li.appendChild(editbtn);
    editbtn.setAttribute("onclick", "editList(this)");
    editbtn.setAttribute("class", "btn")


    todoList.appendChild(li);

    input.value = "";
    count++
    item.innerHTML= count;
}
else{
    alert("Fill ur list first!")
}

}

//delete button function
function deleteList(e){
    e.parentNode.remove();
    count--
    item.innerHTML = count
}

//Edit button function

function editList(e){
    var editTodo = prompt("Edited your list here!", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editTodo;

}

function deleteAll(){
   todoList.innerHTML = ""
   count = 0;
   item.innerHTML= count;
}


function imgChange(e){
    var img = document.getElementById("img");
    img.style.src = "./img2.jpg"
}


var d = new Date();
var container = document.getElementById("container").innerHTML = d;
    console.log(container);
    var d = new Date();