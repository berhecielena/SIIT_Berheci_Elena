import { getTodos } from "./api";

getTodos().then(function(todos){
    const ulHTML= document.createElement("ul");
    for(let i=0;i<todos.length;i++){
        const itemHTML=createTodo(todos[i].name,todos[i].id);
        const deleteBtn=getDeleteButton(todos[i].id);
        const checkBtn =checkTodo(todos[i].id , todos[i].checked);

        deleteBtn.classList.add("btnDelete");
        itemHTML.classList.add("items");
        itemHTML.appendChild(deleteBtn);
        itemHTML.appendChild(checkBtn);
        ulHTML.appendChild(itemHTML);
    }
    document.body.appendChild(ulHTML);

});
function createTodo(text, id){
    const todoHtml = document.createElement("li");
    todoHtml.innerText = text;
    return todoHtml;
}