let userName = prompt("What is your name?");
let name =document.querySelector("#myName");
name.innerHTML=userName
function showTime() {
    let date = new Date();
    var days =  //must be added days because days showing like as 0,1,2 etc.
        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  // day 0 = Pazar

    let myClock = document.querySelector("#myClock")
    myClock.innerHTML =`
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
${days[date.getDay()]}
` ;
}
setInterval(showTime,1000)