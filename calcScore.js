import chalk from "chalk";
import { userMCQs } from "./app.js";
function calcScore() { }
let userCounter = 0;
if (userMCQs.one == "let") {
    console.log(chalk.bgYellowBright.greenBright.bold(`Well Done! "${userMCQs.one}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.one} is the Wrong Answer`));
}
if (userMCQs.two == ".example") {
    console.log(chalk.bgYellowBright.greenBright.bold(`Well Done! "${userMCQs.two}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.two} is the Wrong Answer`));
}
if (userMCQs.three == "Hyper Text Markup Language") {
    console.log(chalk.bgYellowBright.greenBright.bold(`Well Done! "${userMCQs.three}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.three} is the Wrong Answer`));
}
if (userMCQs.four == "To add static typing to JavaScript") {
    console.log(chalk.bgYellowBright.greenBright.bold(`Well Done! "${userMCQs.four}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.four} is the Wrong Answer`));
}
if (userMCQs.five == "Object") {
    console.log(chalk.bgYellowBright.greenBright.bold(`Well Done! "${userMCQs.five}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.five} is the Wrong Answer`));
}
console.log(`Your Total Score is ${userCounter} out of 5`);
