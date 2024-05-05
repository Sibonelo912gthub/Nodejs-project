const fs = require("fs");

const book = {
  tutle: "Harry Gwala",
  author: "himself",
};

const stringBook = JSON.stringify(book);

//fs.writeFileSync("1-book.json", stringBook);

const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer.toString());

const JSONdata = JSON.parse(dataBuffer.toString());
console.log(JSONdata);
// console.log(book);
// console.log(stringBook.tutle);

// const JSONbook = JSON.parse(stringBook);

// console.log(JSONbook)
