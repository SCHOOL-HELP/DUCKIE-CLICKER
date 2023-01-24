var clicks = 0.0;
var rebirths = 0.0;
var cps = 1;
var cpsP = 1;
var autoclickerRate = 10000 / rebirths;
var debounce = false;
var interval = 5000;
var intervalId;

alert(`Welcome to Ducky Clicker!   A basic Cookie Clicker remake!
1000 clicks: Autoclicker every 5 seconds
2000 clicks: Autoclicker every 4 seconds
3000 clicks: Autoclicker every 3 seconds
4000 clicks: Autoclicker every 2 seconds
5000 clicks: Autoclicker every second
6000 clicks: Autoclicker every 9/10ths of a second
7000 clicks: Autoclicker every 8/10ths of a second
8000 clicks: Autoclicker every 7/10ths of a second
9000 clicks: Autoclicker every 6/10ths of a second
10000 clicks: Autoclicker every half a second

15000 clicks: Every click is now worth 2 clicks
20000 clicks: Every click is now worth 3 clicks
25000 clicks: Every click is now worth 4 clicks
30000 clicks: Every click is now worth 5 clicks`);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function convert(val) {

    // thousands, millions, billions etc..
    var s = ["", "k", "m", "b", "t"];

    // dividing the value by 3.
    var sNum = Math.floor(("" + val).length / 3);

    // calculating the precised value.
    var sVal = parseFloat((
        sNum != 0 ? (val / Math.pow(1000, sNum)) : val).toPrecision(2));

    if (sVal % 1 != 0) {
        sVal = sVal.toFixed(1);
    }

    // appending the letter to precised val.
    return sVal + s[sNum];
};

const confetti = document.createElement("img");
confetti.src = "https://www.icegif.com/wp-content/uploads/icegif-105.gif";
confetti.style.width = "120px";
confetti.style.height = "120px";
confetti.style.border = "2px solid darkgrey";
confetti.style.position = "fixed";
confetti.style.top = "10px";
confetti.style.right = "100px";
confetti.style.display = "none";
confetti.style.pointerEvents = "none";

const saveB = document.createElement("button");
saveB.innerHTML = "S";
saveB.style.top = "100px"
saveB.style.right = "100px";
saveB.style.position = "fixed";

saveB.onclick = function () {
    var data = { clicks: clicks, rebirths: rebirths, cps: cps, cpsP: cps, interval: interval }
    prompt("Your save string:", btoa(JSON.stringify(data)));
}

const loadB = document.createElement("button");
loadB.innerHTML = "L";
loadB.style.top = "100px"
loadB.style.right = "100.5px";
loadB.style.position = "fixed";

loadB.onclick = function () {
    var encoded = prompt("Your save string:", "None");
    if (encoded == "None") {
    } else {
        var data = JSON.parse(atob(encoded))
        clicks = data.clicks
        rebirths = data.rebirths
        cps = data.cps
        cpsP = data.cpsP
        interval = data.interval
        counter.innerHTML = convert(clicks)
    }
}

const plusOne = document.createElement("label");
plusOne.innerHTML = "+1";
plusOne.style.position = "fixed";
plusOne.style.display = "none";
plusOne.style.top = "20px";
plusOne.style.right = "122.5px";

const counter = document.createElement("label");
counter.innerHTML = "0";
counter.style.position = "fixed";
counter.style.display = "block";
counter.style.top = "15px";
counter.style.right = "195px";

const gameWindow = document.createElement("div");
gameWindow.style.backgroundColor = "grey";
gameWindow.style.width = "120px";
gameWindow.style.height = "120px";
gameWindow.style.border = "2px solid darkgrey";
gameWindow.style.position = "fixed";
gameWindow.style.top = "10px";
gameWindow.style.right = "100px";

const ducky = document.createElement("img");
ducky.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rubber_duck.svg/1935px-Rubber_duck.svg.png";
ducky.style.width = "100px";
ducky.style.height = "100px";
ducky.style.position = "fixed";
ducky.style.top = "20px";
ducky.style.right = "112.5px";
ducky.alt = "Rubber Ducky";
ducky.style.textAlign = "center";

ducky.onclick = function () {
    autoclickerRate = 10000 / rebirths;
    if (clicks > 999) {
        rebirths = 1;
        ducky.src = "https://i.ibb.co/N3FQsq8/1935px-Rubber-duck-svg.png";
    }
    if (clicks > 99999) {
        confetti.style.display = "block";
    }

    plusOne.style.display = "block";
    plusOne.innerHTML = "+" + cpsP;

    ducky.style.width = "90px";
    ducky.style.height = "90px";
    ducky.style.position = "fixed";
    ducky.style.top = "25px";
    ducky.style.right = "117.5px";

    clicks = clicks + cpsP;

    if (clicks == 1000) {
        interval = 5000;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 2000) {
        interval = 4000;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 3000) {
        interval = 3000;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 4000) {
        interval = 2000;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 5000) {
        interval = 1000;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 6000) {
        interval = 900;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 7000) {
        interval = 800;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 8000) {
        interval = 700;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 9000) {
        interval = 600;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 10000) {
        interval = 500;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 15000) {
        interval = 500;
        cps = 2;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 20000) {
        interval = 500;
        cps = 3;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 25000) {
        interval = 500;
        cps = 4;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 30000) {
        interval = 500;
        cps = 5;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 50000) {
        alert("Dang, you have strong dedication, I respect that, here ya go.");
        cpsP = 5;
        interval = 100;
        cps = 10;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 35000) {
        cpsP = 2;
        interval = 500;
        cps = 5;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 40000) {
        cpsP = 3;
        interval = 500;
        cps = 5;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 45000) {
        cpsP = 4;
        interval = 500;
        cps = 5;
        clearInterval(intervalId);
        startInterval(interval);
    } else if (clicks == 100000) {
        alert("100,000?!  You stuck around for a long time, you win!  Now watch the number climb!");
        cpsP = 100;
        interval = 0;
        cps = 1000;
        clearInterval(intervalId);
        startInterval(interval);
    }

    counter.innerHTML = convert(clicks);

    setTimeout(function () {
        plusOne.style.display = "none";

        ducky.style.width = "100px";
        ducky.style.height = "100px";
        ducky.style.position = "fixed";
        ducky.style.top = "20px";
        ducky.style.right = "112.5px";
    }, 250);
};

// store in a function so we can call it again
function startInterval(_interval) {
    // Store the id of the interval so we can clear it later
    intervalId = setInterval(function () {
        if (clicks > 999) {
            rebirths = 1;
            ducky.src = "https://i.ibb.co/N3FQsq8/1935px-Rubber-duck-svg.png";
        }
        if (clicks > 99999) {
            confetti.style.display = "block";
        }
        if (clicks > 999) {
            plusOne.style.display = "block";
            plusOne.innerHTML = "+" + cps;

            ducky.style.width = "90px";
            ducky.style.height = "90px";
            ducky.style.position = "fixed";
            ducky.style.top = "25px";
            ducky.style.right = "117.5px";

            clicks = clicks + cps;

            counter.innerHTML = convert(clicks);

            setTimeout(function () {
                plusOne.style.display = "none";

                ducky.style.width = "100px";
                ducky.style.height = "100px";
                ducky.style.position = "fixed";
                ducky.style.top = "20px";
                ducky.style.right = "112.5px";
            }, 250);

            if (clicks == 1000) {
                interval = 5000;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 2000) {
                interval = 4000;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 3000) {
                interval = 3000;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 4000) {
                interval = 2000;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 5000) {
                interval = 1000;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 6000) {
                interval = 900;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 7000) {
                interval = 800;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 8000) {
                interval = 700;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 9000) {
                interval = 600;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 10000) {
                interval = 500;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 15000) {
                interval = 500;
                cps = 2;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 20000) {
                interval = 500;
                cps = 3;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 25000) {
                interval = 500;
                cps = 4;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 30000) {
                interval = 500;
                cps = 5;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 50000) {
                alert("Dang, you have strong dedication, I respect that, here ya go.");
                cpsP = 5;
                interval = 100;
                cps = 10;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 35000) {
                cpsP = 2;
                interval = 500;
                cps = 5;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 40000) {
                cpsP = 3;
                interval = 500;
                cps = 5;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 45000) {
                cpsP = 4;
                interval = 500;
                cps = 5;
                clearInterval(intervalId);
                startInterval(interval);
            } else if (clicks == 100000) {
                alert("100,000?!  You stuck around for a long time, you win!  Now watch the number climb!");
                cpsP = 100;
                interval = 0;
                cps = 1000;
                clearInterval(intervalId);
                startInterval(interval);
            }
        }
    }, _interval);
}


function getInterval() {
    return interval;
}



clearInterval(intervalId);
startInterval(interval);

document.body.appendChild(gameWindow);
document.body.appendChild(ducky);
document.body.appendChild(plusOne);
document.body.appendChild(counter);
document.body.appendChild(confetti);
document.body.appendChild(saveB);
document.body.appendChild(loadB);