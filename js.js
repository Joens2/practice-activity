const name = "Joseph";



console.log(`hello ${name}`);
console.warn("BIG DANGER");
console.time("myTimer");
console.timeEnd("myTimer");

function getCurrentDate () {
    return new Date();
}

document.getElementById("year").textContent = getCurrentDate();

function sayHello() {
    alert("Thanks for visiting!");
}

function visibility() {
    if (document.querySelector(".contact").style.opacity === "0") {
        document.querySelector(".contact").style.opacity = "1";
    } else {
        document.querySelector(".contact").style.opacity = "0";
    }
}