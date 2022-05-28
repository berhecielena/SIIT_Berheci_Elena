// 3. Sa stergem un TODO


// task1: Un btn de detele pe fiecare todo
// task2: Daca apasam pe btn, se face trigger la o functie

function getDeleteButton(todoId) {
    // am adaugat un <button>delete</button in <li>
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "delete"
  
    deleteButton.addEventListener("click", async function () {
      // requestul la server ca sa facem stergerea
      await fetch(`${baseUrl}/todos/${todoId}`, {
        method: "DELETE",
      });
      location.reload();
  
    })
  
    return deleteButton;
  }