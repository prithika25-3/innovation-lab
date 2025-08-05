let tasks = [];

function addTask(task, callback) {
    tasks.push(task);
    callback();
}

function showTasks() {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function addMultiple(...args) {
    args.forEach(task => tasks.push(task));
    console.log("Multiple tasks added.");
}

let globalVar = "outside";

function scopeTest() {
    let localVar = "inside";
    console.log("Inside function:", localVar);
    console.log("Access globalVar:", globalVar);
}

addTask("Learn JavaScript", showTasks);
addMultiple("Build project", "Submit report");
showTasks();
scopeTest();
console.log("Outside function:", globalVar);
