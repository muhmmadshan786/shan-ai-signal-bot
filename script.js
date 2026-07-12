function generateSignal(){

let signals = ["🟢 UP","🔴 DOWN"];
let signal = signals[Math.floor(Math.random()*2)];

let chance = Math.floor(Math.random()*11)+90;

document.getElementById("signal").innerHTML = signal;
document.getElementById("chance").innerHTML = "Accuracy: " + chance + "%";

if(signal=="🟢 UP"){
document.getElementById("signal").style.color="lime";
}else{
document.getElementById("signal").style.color="red";
}

}
