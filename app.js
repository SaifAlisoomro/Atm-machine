#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let accountPin = 7700;
let pinAns = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number"
});
if (pinAns.pin === accountPin) {
    console.log("correct pin");
    let operatons = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operatons.operation === "withdraw") {
        let amounts = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number",
            }]);
        if (amounts.amount <= myBalance) {
            let balance = myBalance - amounts.amount;
            console.log(`the remaining balance is ${balance}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
    }
    else if (operatons.operation === "fast cash") {
        let fastcashans = await inquirer.prompt([{
                name: "amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 20000]
            }]);
        if (fastcashans.amount <= myBalance) {
            let balance1 = myBalance - fastcashans.amount;
            console.log(`the remainig balance is ${balance1}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
    }
    else if (operatons.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("incorrect pin");
}
