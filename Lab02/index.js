// Document 



function getInfo() {
    var date = new Date;
    var year = date.getFullYear();
    //months variable
    const months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October",
    "November", "December"];
    var hours = (document.getElementById("select-menu").selectedIndex == 0 ? date.getHours()%12 : date.getHours());
    return [year, months[date.getMonth()], date.getDate(),hours , date.getMinutes()];

}

function toggleOnPage () {
    var locDate = getInfo();
    document.querySelector("#time-out").innerHTML = "The date today is " + locDate[1] + " " + locDate[2] + ", " + locDate[0] +
    "<br>and the current time is: " + locDate[3] + ":" + locDate[4];
}
function togglePopUp () {
    var locDate = getInfo();
    alert("The date today is " + locDate[1] + " " + locDate[2] + ", " + locDate[0]);
    alert(" and the current time is: " + locDate[3] + ":" + locDate[4].toString());
    
}