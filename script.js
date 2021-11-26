//for digital clock

function calTime() {
  //create a Date object
  let time = new Date();
  //retrieve hour min and sec using the 'Date' object created above
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  //ceeate a var to display am pm
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
}
if (hour == 0) {
    hr = 12;
    am_pm = "AM";
}

  //prefix zero in hour min and sec values if values less than 10
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

 

  let timeNow = hour + ":" + min + ":" + sec + am_pm;

  document.getElementById("timer").innerHTML = timeNow;
}

//the above function displays current time only one whenever calTime is called.
//to refresh this function every second, use settimeout method set to 1000ms
setInterval(calTime, 1000);

// for array push
//create an array of objects. each object stores two values here--uname and email
const userInfo = [
  {
    uname: "Jane",
    email: "jane@gmail.com",
  },
  {
    uname: "Kate",
    email: "kate@gmail.com",
  },
  {
    uname: "Amy",
    email: "amy@gmail.com",
  },
];

//to accept dynamic inputs from user through textbox, create an empty object as follows

const info = {};

//another two variables for accepting user input through textbox
let uname = "";
let email = "";

//function added as onclick event
function addInfo() {
  uname = document.getElementById("uname").value;
  email = document.getElementById("email").value;

  //store these inputs in the'info' object created above as follows
  info["uname"] = uname;
  info["email"] = email;

  //now use the 'push' method to add the 'info' object to 'userInfo' array
  userInfo.push(info);

  //console output
  console.log(userInfo);

  //document output-- userInfo is an object which means it has 'reference memory only'--so cannot output directly to the document window--To display object in document window use JSON stringify method to convert to String value. Then display this string to document window--it recognizes the 'pre' tag and displays prettily!
  document.getElementById("displayArray").innerHTML = JSON.stringify(
    userInfo,
    null,
    2
  );
}

//Advanced functions

let num1 = 0;
let num2 = 0;

//getInput as arrow function/anonymous function
let getInput = () => {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
};

//all these functions calls getInput-callback function
let addNum = () => {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
};
let subNum = () => {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) - parseInt(num2);
};
let mulNum = () => {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) * parseInt(num2);
};
let divNum = () => {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
};
