console.log("Program for lottery");

let containerDOM = document.getElementsByClassName('container');

if(!localStorage.nameList){
    localStorage.setItem('nameList','[]');
}

if(JSON.parse(localStorage.nameList).length > 0){
    document.getElementById('clear').disabled = false
    document.getElementById('end').disabled = false
}

document.getElementById('start').addEventListener('click', addMembers)
document.getElementById('clear').addEventListener('click', clearList)
document.getElementById('end').addEventListener('click',getLuckyName)

function clearList(){
    localStorage.nameList = "[]";
    document.getElementById('clear').disabled = true;
    document.getElementById('start').disabled = false;
    document.getElementById('end').disabled = true;
    document.getElementsByTagName('tbody')[0].innerHTML = "";
}

function validateName(name) {
    if ((name !== "") && (name !== null)) {
        return true;
    }
}

showMembers();

function addMembers() {
    let name = prompt(`Please Enter Member's Name : `);
    if(name == null || name == ""){
        alert("Cancelled");
    }else{
        let tmp = JSON.parse(localStorage.nameList);
        tmp.push(name);
        localStorage.nameList = JSON.stringify(tmp);
        document.getElementsByTagName('tbody')[0].innerHTML = "";
        showMembers();
        document.getElementById('end').disabled = false
    }
}

function getLuckyName() {
    // document.getElementById('end').disabled = true;
    document.getElementById('clear').disabled = false;
    let output = "";
    let min = 0;
    let max = JSON.parse(localStorage.nameList).length-1;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(`Name Lucky Winner is : ${JSON.parse(localStorage.nameList)[random]}`);
    output = document.createElement('div');
    output.innerText = `Lucky Winner : ${JSON.parse(localStorage.nameList)[random]}`
    containerDOM[0].appendChild(output);
}

function showMembers(){
    document.getElementsByTagName('tbody')[0].innerHTML = "";
    let tableDom = document.getElementsByTagName('table')[0];
    let table = document.getElementsByTagName('tbody')[0];
    for (let i = 0; i < JSON.parse(localStorage.nameList).length; i++) {
        table.innerHTML += `<tr><td>${i+1}</td><td>${JSON.parse(localStorage.nameList)[i]}</td></tr>`;
    }
    tableDom.appendChild(table);
}