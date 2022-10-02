function lab3 () {
    var array = [];
    var mean = 0;
    var total = 0;

    var start_button = document.getElementById("arrayStart");

        for (let index = 0; index < 5; index++) {
            let val = Math.floor(Math.random() * 100);
            array.push(val);
            total += val;

            console.log(val);
        }

    var arrayOut = array.toString();

    var mean = total/5;

    document.querySelector("#arrayOut").innerHTML = "array " + arrayOut + "<br>total " + total + "<br>mean " + mean;

}
