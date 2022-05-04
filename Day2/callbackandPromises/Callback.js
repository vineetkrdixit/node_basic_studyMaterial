// calling setTimeoute to occur the event at delay of given time

const time = setTimeout(() => {
  // console.log("HEy this is a setTimeout Callback");
}, 3000);

//calling setInterval to occur the event every given second
const timeInterval = setInterval(() => {
  // console.log("this is Setinterval and will be run every 2 seconds");
}, 2000);

//caalback hell of setTimeout and setInterval to run and stop the event
let count = 0;
const setimeout = setTimeout(() => {
  console.log("this is settimeout function");
  let Interval = setInterval(() => {
    console.log("this is setInterval function");
    count = count + 1;
    if (count === 10) {
      clearInterval(Interval);
    }
  }, 2000);
}, 4000);
