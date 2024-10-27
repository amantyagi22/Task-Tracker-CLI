
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'data.json');

const createFile = () => {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf8');
}

const addTask = (description) => {
    if(!fs.existsSync(filePath)){
        createFile();
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const taskList = JSON.parse(data);
        const newTask = {
            id: taskList.length + 1,
            description: description,
            status: "todo",
            createAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        taskList.push(newTask);
        fs.writeFileSync(filePath, JSON.stringify(taskList, null, 2), 'utf8');
        console.log(`Task added successfully (ID: ${taskList.length})`);
    } catch (error) {
        console.log(error);
    }
}

const updateTask = (id, {description,status}) => {
    if(!fs.existsSync(filePath)){
        throw new Error("Task list not found");
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const taskList = JSON.parse(data);
        const task = taskList.find(task => task.id === id);
        if(!task){
            console.log("Task not found");
            return;
        }
        if(description) task.description = description;
        if(status) task.status = status;
        task.updatedAt = new Date().toISOString();
        fs.writeFileSync(filePath, JSON.stringify(taskList, null, 2), 'utf8');
        console.log("Task updated successfully");
    } catch (error) {
        console.log(error);
    }
}


const deleteTask = (id) => {
    if(!fs.existsSync(filePath)){
        throw new Error("Task list not found");
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const taskList = JSON.parse(data);
        const taskIndex = taskList.findIndex(task => task.id === id);
        if(taskIndex === -1){
            console.log("Task not found");
            return;
        }
        taskList.splice(taskIndex, 1);
        for(let i = taskIndex; i < taskList.length; i++){
            taskList[i].id = i+1;
        }
        fs.writeFileSync(filePath, JSON.stringify(taskList, null, 2), 'utf8');
        console.log("Task deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

const getTaskList = (status) =>{
    if(!fs.existsSync(filePath)){
        throw new Error("Task list not found");
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const taskList = JSON.parse(data);
        if(status) {
            console.log(taskList.filter(task => task.status === status));
            return;
        }
        console.log(taskList);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addTask,
    getTaskList,
    updateTask,
    deleteTask
}