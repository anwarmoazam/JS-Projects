let div = document.createElement('div');
div.innerText = 'Select Date of Birth : ';
let input = document.createElement('input');
let outputDiv = document.createElement('div');

input.setAttribute('type', 'date');
div.appendChild(input);
document.body.appendChild(div);

input.addEventListener('change', createBox);

function createBox() {
    outputDiv.innerHTML = "";
    let birthYear = new Date(input.value);
    let currentYear = new Date();
    let age = currentYear.getFullYear() - birthYear.getFullYear();
    if(birthYear.getMonth() > currentYear.getMonth()){
        age--;
    }
    for (let i = 0; i < age; i++) {
        let box = document.createElement('div');
        box.setAttribute("style", `display:inline-block;width:50px;height:50px;background-color:rgb(${getRandomNumber(0,255)},${getRandomNumber(0,255)},${getRandomNumber(0,255)});margin:5px`);
        outputDiv.appendChild(box);
    }
    document.body.appendChild(outputDiv);
    console.log(age);   
}

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}