let circleDOM = document.querySelector('#circle');

let state = updateState();
updateCircleStyle(circleDOM);

document.addEventListener('mousemove', getPosition);
document.addEventListener('click', pasteCircle);

function getPosition({ clientX, clientY }) {
    circleDOM.style.left = `${clientX - (parseInt(circleDOM.style.height)/2)}px`;
    circleDOM.style.top = `${clientY - (parseInt(circleDOM.style.height)/2)}px`;
}

function pasteCircle({ clientX, clientY }) {
    let circle = document.createElement('div');
    updateCircleStyle(circle);
    circle.className = 'circle';
    circle.style.left = `${clientX - (parseInt(circle.style.height)/2)}px`;
    circle.style.top = `${clientY - (parseInt(circle.style.height)/2)}px`;
    state = updateState();
    updateCircleStyle(circleDOM,{clientX,clientY});
    document.body.appendChild(circle);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateCircleStyle(dom,{clientX,clientY}={}){
    if(clientX && clientY){
        dom.style.left = `${clientX - (parseInt(state.size)/2)}px`;
        dom.style.top = `${clientY - (parseInt(state.size)/2)}px`;
    }
    dom.style.height = `${state.size}px`;
    dom.style.width = `${state.size}px`;
    dom.style.backgroundColor = `${state.color}`;
}

function updateState(){
    return { size: getRandomNumber(20, 100), color: `rgb(${getRandomNumber(0, 255)},${getRandomNumber(0, 255)},${getRandomNumber(0, 255)})` };
}