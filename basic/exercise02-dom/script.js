

button = document.getElementById("newSquare");

button.onclick = function(){
    square = document.createElement("box");
    square.style.display = 'block';
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.backgroundColor = 'red';

    document.body.appendChild(square);

    console.log(square);

    changeColor();
    
};

function changeColor(){
    squares = document.getElementsByTagName("box");
    console.log(squares);
    for(var i=0;i<squares.length;i++){
        console.log(squares[i]);
        // squares[i].addEventListener("mouseover" , function(event){
        //     event.target.style.backgroundColor = getRandomColor();
        // });
        squares[i].onmouseover = function(){
            this.style.backgroundColor = getRandomColor();
        }
    }
}

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onload = function initializeList(){
    var names = ["Diego", "Gabriel", "Lucas"];

    for(var i=0;i<names.length;i++){
        loadList(names[i]);
    }  
};

function loadLista(name){
    var ul = document.querySelector("div#exercise02 ul");
    var itemElement = document.createElement("li");
    var textElement = document.createTextNode(name);

    itemElement.appendChild(textElement);
    ul.appendChild(itemElement);
}

function add(){
    var inputElement = document.querySelector("div#exercise02 input[name='name']");

    loadLista(inputElement.value);
}

function clearInput(input){
    console.log(input.value);
    input.value = "";
}
