const fs = require("fs");

function logReqRes(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n${Date.now()}: ${req.method}: ${req.url}\n`,
      (err) => {
        if (err) console.log(`Something went wrong : ${err}`);
        else {
          console.log("Server log added!!");
          next();
        }
      }
    );
  };
}

module.exports = {
  logReqRes,
};
