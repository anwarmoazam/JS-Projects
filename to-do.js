
let categoryDOM = document.getElementById('task-category');
let taskDetail = document.getElementById('task-detail');
let taskDate = document.getElementById('task-date');
let addToDoBtn = document.getElementById('addToDo');

const category = ["Personal","Work","Lecture","Other"];

const toDoList = [];

(function renderCategory(){
    for(let i=0; i<category.length; i++){
        let option = document.createElement('option');
        option.innerText = category[i];
        categoryDOM.appendChild(option);
    }
})();

addToDoBtn.addEventListener('click',function(e){
    e.preventDefault();
    let toDo = {};
    if((categoryDOM.value === "") || (taskDetail.value === "")){
        alert("Please Insert Valid Detail");
        resetToDoForm();
    } else{
        toDo.category = categoryDOM.value;
        toDo.detail = taskDetail.value;
        toDo.toDoDate = new Date(taskDate.value);
        toDo.done = false;
        toDoList.push(toDo);
        resetToDoForm();
        console.log(toDoList);
    }
})

function resetToDoForm(){
    categoryDOM.value = "";
    taskDetail.value = "";
    taskDate.value = "";
}
