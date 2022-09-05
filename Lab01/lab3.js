
var array = [];
var mean;

    for (let index = 0; index < 5; index++) {
        let val = Math.floor(Math.random() * 100);
        array.push(val);
        total += val;
        
        console.log(val);
    }

var arrayOut = array.toString();

var mean = total/5;

document.querySelector("#arrayOut").innerHTML = "array " + arrayOut + "total " + total + "mean " + mean;


