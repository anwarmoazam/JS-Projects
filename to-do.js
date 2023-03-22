
let categoryDOM = document.getElementById('task-category');
let taskDetail = document.getElementById('task-detail');
let taskDate = document.getElementById('task-date');
let addToDo = document.getElementById("modal-open");
let saveToDoBtn = document.getElementById('saveToDo');

const toDoList = {
    personal : [
    ],
    work : [
    ],
    study : [
    ]
};

(function renderCategory(){
    if(!localStorage['toDoList']){
        localStorage.setItem('toDoList',JSON.stringify(toDoList));
    } else{
        const category = Object.keys(JSON.parse(localStorage.getItem('toDoList')));
        for(let i=0; i<category.length; i++){
            let option = document.createElement('option');
            option.innerText = category[i];
            categoryDOM.appendChild(option);
        }
    }
})();

saveToDoBtn.addEventListener('click',function(e){
    e.preventDefault();
    let toDo = {};
    if((categoryDOM.value.trim() === "") || (taskDetail.value.trim() === "")){
        alert("Please Insert Valid Detail");
        resetToDoForm();
    } else{
        for(let toDoCategory in toDoList){
            if(categoryDOM.value === toDoCategory){
                toDo.id = toDoList[toDoCategory].length+1;
                toDo.detail = taskDetail.value;
                toDo.date = JSON.stringify(new Date(taskDate.value));
                toDo.done = false;
                toDoList[toDoCategory].push(toDo);
                localStorage.setItem('toDoList',JSON.stringify(toDoList));
            }
        }
        resetToDoForm();
        console.log(toDoList);
    }
})

addToDo.addEventListener('click',function(){
    console.log('add button clicked');
    addToDo.classList.add("add-modal");
})

function resetToDoForm(){
    categoryDOM.value = "";
    taskDetail.value = "";
    taskDate.value = "";
}

