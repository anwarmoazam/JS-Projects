const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal){
    if(modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


let categoryDOM = document.getElementById('task-category');
let taskDetail = document.getElementById('task-detail');
let taskDate = document.getElementById('task-date');
let addToDo = document.getElementById("modal-open");
let saveToDoBtn = document.getElementById('saveToDo');

let toDoList = {
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
        toDoList = JSON.parse(localStorage.getItem('toDoList'));
        for(let toDoCategory in toDoList){
            if(categoryDOM.value === toDoCategory){
                toDo.id = toDoList[toDoCategory].length+1;
                toDo.detail = taskDetail.value;
                toDo.date = new Date(taskDate.value);
                // toDo.date = JSON.stringify(new Date(taskDate.value).trim());
                toDo.done = false;
                console.log(toDo);
                toDoList = JSON.parse(localStorage.getItem('toDoList'));
                toDoList[toDoCategory].push(toDo);
                localStorage.setItem('toDoList',JSON.stringify(toDoList));
            }
        }
        resetToDoForm();
    }
})


function resetToDoForm(){
    categoryDOM.value = "";
    taskDetail.value = "";
    taskDate.value = "";
}

// for due to-do
// for (const key in JSON.parse(localStorage.getItem('toDoList'))) {
//     const dueToDo = JSON.parse(localStorage.getItem('toDoList'))[key].filter(item => {
//         return (item.done == false);
//     })
//     console.log(dueToDo);
// }

// for Upcoming to-do
// for(const key in JSON.parse(localStorage.getItem('toDoList'))){
//     JSON.parse(localStorage.getItem('toDoList'))[key].forEach(element => {
//         let toDoDate = new Date(element.date);
//         let today = new Date();
//         (toDoDate > today) ? console.log(element) : "No Upcoming To-do";
//     });;
// }

// for complete to-do
// for (const key in JSON.parse(localStorage.getItem('toDoList'))) {
//     const completeToDo = JSON.parse(localStorage.getItem('toDoList'))[key].filter(element => {
//         let toDoDate = new Date(element.date);
//         let today = new Date();
//         return (toDoDate < today) && (element.done==true)
//     })
//     console.log('Completed To-Do : ', key, completeToDo);
// }

// for Incomplete to-do
// for (const key in JSON.parse(localStorage.getItem('toDoList'))) {
//     const incompleteToDo = JSON.parse(localStorage.getItem('toDoList'))[key].filter(element => {
//         let toDoDate = new Date(element.date);
//         let today = new Date();
//         return (toDoDate < today) && (element.done==false)
//     })
//     console.log('Incomplete To-Do : ', key, incompleteToDo);
// }

// for Inbox to-do
function filterToDo(){
    for (const key in JSON.parse(localStorage.getItem('toDoList'))) {
        console.log(JSON.parse(localStorage.getItem('toDoList'))[key]);
    }
}

filterToDo();