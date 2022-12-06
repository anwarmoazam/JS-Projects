// const key = '4KUXDU9KPRVXY8HK49MJXKF4B';
const key = 'JBE55PG29ZQXMQKBG3WPYB6L7';
let btn = document.querySelector('button');
let cityDOM = document.querySelector("input[type='text']");
let dobDOM = document.querySelector("input[type='date']");
let output = document.querySelector('.output');
const tempStore = [];

cityDOM.addEventListener('change', validateForm);
dobDOM.addEventListener('change', validateForm);

btn.addEventListener('click', printBoxes)

function printBoxes() {
    output.innerHTML = "";
    let city = cityDOM.value.trim();
    let dob = formatDate(dobDOM.value);
    let today = formatDate(new Date());
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${dob}/${today}?unitGroup=metric&include=days&key=${key}&contentType=json`, {
        "method": "GET",
        "headers": {
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        // check data available
        console.log(data);
        // let { temp: maxTemp, temp: minTemp } = data.days[0];
        for (let details of data.days) {
            tempStore.push(details.temp)
            let boxes = document.createElement('div');
            let { datetime, temp } = details;


            // if (temp > maxTemp) {
            //     maxTemp = temp;
            // }
            // if (temp < minTemp) {
            //     minTemp = temp;
            // }

            // boxes.setAttribute('style', `background-color:${r};display:inline-block;width:50px;height:50px;margin:5px`);
            boxes.setAttribute('title', `Temprature : ${temp}, Date : ${datetime}`)

            output.appendChild(boxes);
        }
        const maxTemp = Math.max(...tempStore);
        const minTemp = Math.min(...tempStore);
        console.log('Max Temp : ',maxTemp);
        console.log('Min Temp : ',minTemp);
        console.log('Temp array : ',tempStore);
        // tempStore.forEach(function(value){
        //     const color = '#';
        //     if(value === maxTemp){
        //         console.log('Green');
        //     } else if(value === minTemp){
        //         console.log('Red');
        //     } else{
        //         console.log('Blue');
        //     }
        // })
        for(let box of output.children){
            // if(box.title.substr(13,4)==maxTemp){
            //     box.setAttribute('style', `background-color:red;display:inline-block;width:50px;height:50px;margin:5px`);

            // } else if(box.title.substr(13,4)==minTemp){
            //     box.setAttribute('style', `background-color:green;display:inline-block;width:50px;height:50px;margin:5px`);
            // } else{
            //     box.setAttribute('style', `background-color:blue;display:inline-block;width:50px;height:50px;margin:5px`);
            // }
            if(box.title.match(/(\d+).?(\d+)/)[0]==maxTemp){
                box.setAttribute('style', `background-color:red;display:inline-block;width:50px;height:50px;margin:5px`);

            } else if(box.title.match(/(\d+).?(\d+)/)[0]==minTemp){
                box.setAttribute('style', `background-color:green;display:inline-block;width:50px;height:50px;margin:5px`);
            } else{
                box.setAttribute('style', `background-color:blue;display:inline-block;width:50px;height:50px;margin:5px`);
            }
        }
        document.body.appendChild = output;
    }).catch(err => {
        console.error(err);
    });
}

function validateForm() {
    let city = cityDOM.value.trim();
    let dob = dobDOM.value;
    if (city !== "" && dob !== "") {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function formatDate(inputDate) {
    if ((inputDate instanceof Date) == false) {
        inputDate = new Date(inputDate);
    }
    let [year, month, date] = [inputDate.getFullYear(), ("0" + (inputDate.getMonth() + 1)).slice(-2), ("0" + inputDate.getDate()).slice(-2)];
    return `${year}-${month}-${date}`;
}

