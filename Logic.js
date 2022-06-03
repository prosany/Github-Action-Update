const moment = require("moment");
const date = new Date();

console.log(moment.parseZone(date).local().format("h:mm:ss A"));
console.log(moment(date).format("h a"));
