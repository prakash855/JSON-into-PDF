//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");
var html = fs.readFileSync("index.html", "utf8");
var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents: '<div style="text-align: center;">Intern: Prakash Agrahari</div>',
  },
  footer: {
    height: "28mm",
    contents: {
      first: "Learning conversion of ->JSON->into->PDF-> was fun! 😄",
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: "Last Page",
    },
  },
};
//json file which will convert to pdf
var users = [
  {
    name: "Shyam",
    age: "26",
    number: "+91-1122334455",
  },
  {
    name: "Navjot",
    age: "26",
    number: "+91-1234567890",
  },
  {
    name: "Vitthal",
    age: "26",
    number: "+91-9632587411",
  },
];
var document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
};
pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
