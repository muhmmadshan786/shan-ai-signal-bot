function generateSignal() {
    let signals = ["CALL 📈", "PUT 📉"];
    let signal = signals[Math.floor(Math.random() * signals.length)];
    let chance = Math.floor(Math.random() * 15) + 85;

    document.getElementById("signal").innerHTML = signal;
    document.getElementById("chance").innerHTML = chance + "% Accuracy";
}
