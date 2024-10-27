const readline = require('readline');
const { addTask, getTaskList, updateTask, deleteTask } = require('./util');
// Use the Methods Methods
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (cmd) => {
    const command = cmd.split(' ');
    const description = cmd.split('"').at(1);
    
    // check for the syntax of the command
    if(command.at(0) !== "task-cli"){
        if(command.at(0) === "exit") {
            process.exit(0);
        }
        throw new Error("Invalid command");
    }

    if(command.at(1) === "add"){
        addTask(description);
    }else if(command.at(1) === "update" || command.at(1).split('-').at(0)==="mark"){
        if(command.at(1).split('-').at(0)==="mark"){
            const [_,...status] = command.at(1).split('-');
            updateTask(parseInt(command.at(2)),{status:status.join('-')}, true);
        } else updateTask(parseInt(command.at(2)),{description});
    }else if(command.at(1) === "delete"){
        deleteTask(parseInt(command.at(2)));
    }else if(command.at(1) === "list"){
        getTaskList(command.at(2));
    }else{
        throw new Error("Invalid command");
    }
})