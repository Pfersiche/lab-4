let myName = "kim"
console.log(myName)

function timeOfDay() {
    let time = prompt("what hour is it? (0 -23)");
    let location = ("what country are you in?");
    let message = "";

    if (time <= 11 || location === "uk") {
        message = "good morning";
    } else if (time <= 18 || location === "uk") {
      message = "good afternoon";
    } else if (time <= 24 || location === "uk") {
        message = "good evening";
    }

    return document.write(message);
}

timeOfDay()