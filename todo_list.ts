import inquirer from "inquirer";

import chalk from "chalk";

const starting = "\n \t💁 Welcome to my todo list \n \t";

console.log(chalk.yellow(starting));

let todo_list: string[] = [];

let while_condition: boolean = true;

while (while_condition === true) {
    // ---------------------------------- option -------------------------------------
    let option = await inquirer.prompt([{
        type: "list",
        name: "usr_name",
        message: "select an option",
        choices: ["add","delete","update"]
    }])

     // ---------------------------------- add -------------------------------------
    if(option.usr_name === "add"){
        let use_ans = await inquirer.prompt([{
            type:"input",
            name: "usr_ans",
            message: "write something to add in the list.",
        }])

        if(use_ans.usr_ans !== " "){
            todo_list.push(use_ans.usr_ans)
            console.log(todo_list);  
        }else{
        console.log("Please write something to add todo list.")
        }
    }
      // ---------------------------------- Delete -------------------------------------
    else if(option.usr_name === "delete"){
        let dltChoice = await inquirer.prompt([{
            type: "list",
            name: "usr_dlt",
            message: "select item to delete you want.",
            choices: todo_list
        }]);  
        let index_remove = todo_list.indexOf(dltChoice.usr_dlt);
        if(index_remove >= 0){
            todo_list.splice(index_remove, 1);
            console.log('you removed: ',dltChoice.usr_dlt);
            console.log(todo_list);
        }
    }
 // ---------------------------------- Confirmation-------------------------------------
    let usr_answer = await inquirer.prompt([{
        type : "confirm",
        name: "selection",
        message: "Do you want to continue?",
        default: true,
    }])
    if(usr_answer.selection === false){
        while_condition = false; 
    }
}
console.log(`Thank You for using my Todo List😇`);


