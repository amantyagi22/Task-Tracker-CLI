# Task-Tracker-CLI

Link : <a href="https://roadmap.sh/projects/task-tracker">Project Description Link</a>


## Description

This is a simple CLI based task tracker application. 


## COMMANDS

```
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```


## Installation

```
git clone https://github.com/amantyagi22/Task-Tracker-CLI.git

cd Task-Tracker-CLI

npm start

```


## Features

All the tasks are stored in a JSON file. The application provides the following features:
1. Add a new task
2. Update a task
3. Delete a task
4. Mark a task as in-progress, done, todo(default)
5. List all tasks
6. List tasks by status

