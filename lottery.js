console.log("Program for lottery");

let containerDOM = document.getElementsByClassName('container');

if(!localStorage.nameList){
    localStorage.setItem('nameList','[]');
}

if(JSON.parse(localStorage.nameList).length > 0){
    document.getElementById('clear').disabled = false
    document.getElementById('end').disabled = false
}else{
    document.getElementById('clear').disabled = true
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

showMembers();

function addMembers() {
    document.getElementById('clear').disabled = false
    let name = prompt(`Please Enter Member's Name : `);
    if(name == null || name == ""){
        alert("Invalid Name");
    }else{
        let tmp = JSON.parse(localStorage.nameList);
        tmp.push(name);
        localStorage.nameList = JSON.stringify(tmp);
        // document.getElementsByClassName('.container');
        document.getElementsByTagName('tbody')[0].innerHTML = "";
        showMembers();
        document.getElementById('end').disabled = false
    }
}

function getLuckyName() {
    let min = 0;
    let max = JSON.parse(localStorage.nameList).length-1;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(`Name Lucky Winner is : ${JSON.parse(localStorage.nameList)[random]}`);
    // output = document.createElement('div');
    document.getElementById('result').innerText = `Lucky Winner : ${JSON.parse(localStorage.nameList)[random]}`
    // containerDOM[0].appendChild(output);
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

function sortTable(table,column,asc =true){

}

let tBody = document.querySelectorAll('tbody');
let rows = tBody[0].querySelectorAll('tr')
for(let i=0; i<rows.length; i++){
    console.log(rows[i].innerHTML);
}