"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const filePath = "input.txt";
function isInt(str) {
    const parsedNum = parseInt(str, 10);
    return !isNaN(parsedNum);
}
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
    }
    const red = 12;
    const green = 13;
    const blue = 14;
    // Process the file content
    const games = data.split("\n");
    let illegalGame = 0;
    for (const [index, value] of games.entries()) {
        const noSpaces = value.split(/\s/g);
        for (let i = 0; i < noSpaces.length; i += 2) {
            if (isInt(noSpaces[i])) {
                const number = parseInt(noSpaces[i]);
                if (number > 14) {
                    //Ending it early if it is bigger than 14
                    illegalGame += index + 1;
                    //console.log(noSpaces[i], index + 1, noSpaces[i + 1]);
                    break;
                }
                else if (noSpaces[i + 1][0] == "r") {
                    if (number > red) {
                        // console.log(noSpaces[i], index + 1, "RED");
                        illegalGame += index + 1;
                        break;
                    }
                }
                else if (noSpaces[i + 1][0] == "g") {
                    if (number > green) {
                        //console.log(noSpaces[i], index + 1, "GREEN");
                        illegalGame += index + 1;
                        break;
                    }
                }
                else if (number > blue) {
                    //console.log(noSpaces[i], index + 1, "BLUE");
                    illegalGame += index + 1;
                    break;
                }
            }
        }
    }
    console.log(5050 - illegalGame);
});
