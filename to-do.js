
let categoryDOM = document.getElementById('task-category');
let taskDetail = document.getElementById('task-detail');
let taskDate = document.getElementById('task-date');
let addToDoBtn = document.getElementById('addToDo');

const toDoList = {
    personal : [
        {
            id : 1,
            detail : 'Shopping',
            date : JSON.stringify(new Date()),
            done : false
        },
        {
            id : 2,
            detail : 'Watch Movie',
            date : JSON.stringify(new Date()),
            done : false
        }
    ],
    work : [
        {
            id : 1,
            detail : 'Make Report',
            date : JSON.stringify(new Date()),
            done : false
        },
        {
            id : 2,
            detail : 'Attend VC',
            date : JSON.stringify(new Date()),
            done : false
        }
    ],
    study : [
        {
            id : 1,
            detail : 'Comlpete Course',
            date : JSON.stringify(new Date()),
            done : false
        },
        {
            id : 2,
            detail : 'Code',
            date : JSON.stringify(new Date()),
            done : false
        }
    ]
};

(function renderCategory(){
    const category = Object.keys(toDoList);
    for(let i=0; i<category.length; i++){
        let option = document.createElement('option');
        option.innerText = category[i];
        categoryDOM.appendChild(option);
    }
})();

addToDoBtn.addEventListener('click',function(e){
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
            }
        }
        resetToDoForm();
        console.log(toDoList);
    }
})

function resetToDoForm(){
    categoryDOM.value = "";
    taskDetail.value = "";
    taskDate.value = "";
}

