import { Console } from "console";
import * as fs from "fs";
const filePath = "input.txt";

function isInt(str: string): boolean {
  const parsedNum = parseInt(str, 10);
  return !isNaN(parsedNum);
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  const red: number = 12;
  const green: number = 13;
  const blue: number = 14;

  // Process the file content
  const games: string[] = data.split("\n");
  let illegalGame: number = 0;

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
        } else if (noSpaces[i + 1][0] == "r") {
          if (number > red) {
            // console.log(noSpaces[i], index + 1, "RED");
            illegalGame += index + 1;
            break;
          }
        } else if (noSpaces[i + 1][0] == "g") {
          if (number > green) {
            //console.log(noSpaces[i], index + 1, "GREEN");
            illegalGame += index + 1;
            break;
          }
        } else if (number > blue) {
          //console.log(noSpaces[i], index + 1, "BLUE");
          illegalGame += index + 1;
          break;
        }
      }
    }
  }

  console.log(5050 - illegalGame);
});
