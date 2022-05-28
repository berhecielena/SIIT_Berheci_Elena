const checkTodo=function(todoId,todoCheck){
    const btnCheck=document.createElement("input");
    btnCheck.type="checkbox";
    btnCheck.checked=todoCheck;

    btnCheck.addEventListener("click",function(){
        const updateData={
            checked: btnCheck.checked,
        };
        fetch('${baseUrl}/todos/${todoId}',{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(updateData),
        })
        .then(function(res){
            return res.json();
        })
        .then(function(todo){
            console.log(todo);
            btnCheck.checked=todo.checked;
        })
        .then(function(){
            location.reload();
        });
    });
    return btnCheck;
}