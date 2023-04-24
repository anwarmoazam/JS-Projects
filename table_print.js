let arr = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

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
    let value = event.target.innerText;
    result.innerHTML = `Table of ${value} is : <br>`;
    for(let i=1; i<=10; i++){
        setTimeout(function(){
            result.innerHTML += `${value} x ${i} = ${value*i}<br>`
        },i*200)
    }
}

