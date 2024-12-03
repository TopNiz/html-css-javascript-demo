const DAYS_LIST = ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"];

function dayItem(day) {
    let item = document.createElement("li");
    item.innerHTML = "<strong>" + day + "</strong>";

    return item;
}

function loadList() {
    let exercise1Heading = document.querySelector("#exercise-1 h2");
    console.log("The content of the variable is: ", exercise1Heading);

    // Step 1: Save the reference of section "#exercise-1"
    let section = document.querySelector("#exercise-1");

    // Step 2: Create weekdays' list
    let weekDaysList = document.createElement("ol");

    // Step 3: Append weekdays' list to the saved section
    section.appendChild(weekDaysList);

    // Step 4: Append every day item to the weekdays' list
    for (let i = 0; i < DAYS_LIST.length; i += 1) {
        let item = dayItem(DAYS_LIST[i]);
        weekDaysList.appendChild(item);
    }

    hide();
}

function hide() {
    let list = document.querySelector("ol");
    list.style.display = "none";

    let showBtn = document.querySelector("#show");
    showBtn.style.display = "inline-block";

    let hideBtn = document.querySelector("#hide");
    hideBtn.style.display = "none";
}

function show() {
    let list = document.querySelector("ol");
    list.style.display = "block";

    let showBtn = document.querySelector("#show");
    showBtn.style.display = "none";

    let hideBtn = document.querySelector("#hide");
    hideBtn.style.display = "inline-block";
}

function initialize() {
    let showBtn = document.querySelector("#show");
    let hideBtn = document.querySelector("#hide");
    loadList();
    showBtn.addEventListener("click", show);
    hideBtn.addEventListener("click", hide);
}

function computeBMI() {
    let weightInput = document.querySelector("#weight");
    let heightInput = document.querySelector("#height");

    let weight = weightInput.value;
    let height = heightInput.value / 100; // Convert to meter

    console.log("Weight", weight);
    console.log("Height", height);

    let bmi = weight / (height * height);
    console.log("BMI", bmi);

    let resultElem = document.querySelector(".result");
    resultElem.innerHTML = bmi + " °C";

}

window.addEventListener("load", initialize);