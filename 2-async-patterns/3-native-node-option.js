//opción nativa de node

const { readFile, writeFile } = require("fs");
//se importa util de una libería, que es lo que hace el promise que está comentado al final de doc
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//async y await
const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

//esta forma es para evitar la asignación de variables y anidar promise directamente, ojo que en first y en second se usa readFile y después se usa writeFile

// const { readFile, writeFile } = require("fs").promise;

// const start = async () => {
//   try {
//     const first = await readFile("./content/first.txt", "utf8");
//     const second = await readFile("./content/second.txt", "utf8");
//     await writeFile(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'} //el flag hace que el texto se repita dos veces
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

//este código se evita con la opción nativa de node

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
