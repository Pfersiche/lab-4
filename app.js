function timeOfDay() {
    let time = prompt("what hour is it? (0 -23)");
    let location = ("what country are you in?");
    let message = "";

    if (time <= 11 || location === "uk") {
        message = "good morning detective";
    } else if (time <= 22 || location === "uk") {
      message = "good afternoon";
    } else if (time <= 24 || location === "uk") {
        message = "see you in the morning..";
    }

    return document.write(message);
}

