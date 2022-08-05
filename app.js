window.onload = init;
idTask = 0;
output = document.getElementById("output");

console.log("hello")

insertLocalStoragesTodos = () => {
  for (var i = 0; i < localStorage.length; i++){
    output.innerHTML += localStorage.getItem(localStorage.key(i));
    console.log(i)
}

}
insertLocalStoragesTodos();

taskValidation = (title, textarea) => {
    if (title === "" || textarea === "") {
        alert("The Title and Comment's fields are requiered");
        throw 'Error - Title or Comment are null or empty'
    } else {
        return
    }

}

saveTask = () => {
    title = document.getElementById("titleInput").value;
    textarea = document.getElementById("textAreaInput").value;
    idTask++;

    message =
        `<a id=${idTask} class="list-group-item">
        <div id="t" class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${title}</h5>
            <small onclick="deleteTask(${idTask})" class="text-muted">
              <i class="fa fa-times" aria-hidden="true"></i>
            </small>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1">${textarea}</p><small class="text-muted">Created: ${Date().slice(3, 25)}</small>
        </div>
      </a>`;

      taskValidation(title, textarea);
      output.innerHTML += message;
      localStorage.setItem(`task${idTask}`,message);
  }

  
  deleteTask = (id) => {
    taskToDelete = document.getElementById(id);
    localStorage.removeItem(`task${id}`)
    taskToDelete.remove();
  }
  
  
  function init() {
    output = document.getElementById("output");
    saveButton = document.getElementById("saveTask");
    saveButton.addEventListener("click", saveTask);
}




