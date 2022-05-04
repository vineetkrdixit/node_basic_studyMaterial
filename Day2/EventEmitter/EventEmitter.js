const EventEmitter = require("events");
const event = new EventEmitter();
event.on("start", () => {
  console.log("Event Has Started ");
});
event.on("end", () => {
  console.log("Event has been ended");
});
event.on("start", (data) => {
  console.log(data);
});
event.emit("start");
event.emit("end");
event.emit("start", "this is the data of start event");
event.removeAllListeners("start");
event.emit("start");
