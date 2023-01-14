let mytable = "";
for (let i = 1; i <= 10; i++) {
  mytable += `3 x ${i} = ${3 * i}\n`;
}

// Example: Read a file and change its content and read
// it again using callback-based API.
const fs = require("fs");

const fileName = "./fav_movies.txt";
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  fs.writeFile(fileName, mytable, (err2) => {
    if (err2) {
      console.log(err2);
      return;
    }
    console.log("Wrote some content!");
    fs.readFile(fileName, "utf8", (err3, data3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log(data3);
    });
  });
});
