"use strict";
let tasks = [];
function showTasks() {
    console.table(tasks);
}
function addTask(task) {
    tasks.push({
        id: tasks.length + 1,
        status: "available",
        task: task
    });
}
function removeTask(id) {
    const arr = tasks.filter((item) => item.id !== id);
    const isExist = tasks.some((item) => item.id === id);
    !isExist && console.log(`item can not be removed, because ${id} dose not in any item.`);
    return arr;
}
const updateStatus = (id, status) => {
    const task = tasks === null || tasks === void 0 ? void 0 : tasks.find(item => (item === null || item === void 0 ? void 0 : item.id) === id);
    if (task) {
        task.status = status;
    }
};
addTask("Do something");
addTask("Done My works");
updateStatus(2, "done");
// tasks=removeTask(1)
showTasks();
