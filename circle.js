class Log {
	constructor() {
		this.data = [];
	}

	set log(str) {
		this.data.push(str);
	}

	get logs() {
		return this.data;
	}
}

const logger = new Log();
logger.log = 'Starting Application';
const limit = 3;
logger.log = `Setting Limit to ${limit}`;

let circleDOM = document.querySelector('#circle');

let state = updateState();
logger.log = `Initialising State with ${JSON.stringify(state)}`;
updateCircleStyle(circleDOM);

document.addEventListener('mousemove', getPosition);
logger.log = `Initializing Mousemove getPosition event`;
document.addEventListener('click', pasteCircle);
logger.log = `Initializing Click pasteCirle event`;

function getPosition({ clientX, clientY }) {
    // logger.log = `Calling getPosition, ${clientX,clientY}`;
    circleDOM.style.left = `${clientX - (parseInt(circleDOM.style.height)/2)}px`;
    circleDOM.style.top = `${clientY - (parseInt(circleDOM.style.height)/2)}px`;
}

function pasteCircle({ clientX, clientY }) {
    logger.log = `Calling pasteCircle, ${clientX,clientY}`;
    let circle = document.createElement('div');
    updateCircleStyle(circle);
    circle.className = 'circle';
    circle.style.left = `${clientX - (parseInt(circle.style.height)/2)}px`;
    circle.style.top = `${clientY - (parseInt(circle.style.height)/2)}px`;
    state = updateState();
    document.body.appendChild(circle);
    logger.log = `Pasted Circle`;
    if(pasteCircle.circleCount) {
        pasteCircle.circleCount++;
    } else{
        pasteCircle.circleCount = 1;
    } 
    if(pasteCircle.circleCount<limit){
        updateCircleStyle(circleDOM,{clientX,clientY});
    } else{
        document.removeEventListener('click',pasteCircle);
        document.removeEventListener('mousemove',getPosition);
        logger.log = `Removing Event`;
    }
    logger.log = `pasteCircle End`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateCircleStyle(dom,{clientX,clientY}={}){
    logger.log = `Updating Circle Style`;
    if(clientX && clientY){
        dom.style.left = `${clientX - (parseInt(state.size)/2)}px`;
        dom.style.top = `${clientY - (parseInt(state.size)/2)}px`;
    }
    dom.style.height = `${state.size}px`;
    dom.style.width = `${state.size}px`;
    dom.style.backgroundColor = `${state.color}`;
}

function updateState(){
    logger.log = `Updating State`;
    return { size: getRandomNumber(20, 100), color: `rgb(${getRandomNumber(0, 255)},${getRandomNumber(0, 255)},${getRandomNumber(0, 255)})` };
}
