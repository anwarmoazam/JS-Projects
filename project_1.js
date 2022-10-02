let arr = [41,42,43,44,45,46,47,48,49,5031,32,33,34,35,36,37,38,39,40];

let div = document.createElement('div');

let result = document.createElement('div');

// let txt = document.createElement('input');
// document.body.appendChild(txt);

for(let i=0; i<arr.length; i++){
    let btn = document.createElement('button');
    btn.innerText = arr[i];
    btn.addEventListener('click',printTable);

    div.appendChild(btn);
}

div.appendChild(result)

document.body.appendChild(div);

function printTable(event){
    let txt = "";
    let value = event.target.innerText;
    txt = `Table of ${value} is : <br>`;
    for(let i=1; i<=10; i++){
        txt += `${value} x ${i} : ${value*i}<br>`;
    }
    result.innerHTML = txt;
}

