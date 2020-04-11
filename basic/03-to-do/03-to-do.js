var todos = JSON.parse(localStorage.getItem('list_todos'));

window.onload = function(){
    for(todo of todos){
        renderToDo(todo);
    }
}

function renderToDo(name){
    var list = document.querySelector("#app ul");
    var item = document.createElement("li");
    var text = document.createTextNode(name);

    var removeElement = document.createElement("a");
    removeElement.setAttribute("href", "#");
    removeElement.appendChild(document.createTextNode("Excluir"));
    removeElement.addEventListener("click", ()=>remove(removeElement));

    item.appendChild(text);
    item.appendChild(removeElement);
    list.appendChild(item);
}

function addItem(){
    var input = document.querySelector("#app input");
    renderToDo(input.value);
    todos.push(input.value);
    input.value="";

    updateStorage();
}

function remove(el){
    var list = document.querySelector("#app ul");

    var pos = todos.indexOf(el);
    todos.splice(pos,1);
    list.removeChild(el.parentNode);

    updateStorage();
}

function updateStorage(){
    //stringify: transformar vetor em string json
    localStorage.setItem('list_todos', JSON.stringify(todos));
}