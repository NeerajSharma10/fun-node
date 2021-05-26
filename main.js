#!/usr/bin/env node

//The Above script ensures that the file will run in node js enviroment 

//If we want to take input from the command line 

// let inputArr = process.argv;
// console.log(inputArr);

let inputArr = process.argv.slice(2);
let fs = require("fs");

let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

const { type } = require("os");
let path = require("path");

let types = {

    media: ["mp4","mkv"],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz','bmp'],
    documents: ['docx','doc','pdf','xlsx','xls','odt','odp','odg','txt','ps'],
    app: ['exe','dmg','pkg','deb','']

}

// console.log(inputArr);

//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help "directoryPath"


let command = inputArr[0];

switch(command)
{
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please 🙏 input right command");
        break;
}
