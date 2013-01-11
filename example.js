cp = require("./colorplus.js");

console.log("This is", cp.yellow, "yellow", "without reset.");
console.log("This is", cp.red, "red", cp.r, "with reset");
console.log(cp.yellow, "This is", cp.bggreen, "bgColor", cp.r, "test");

console.log("Use " + cp.green + "plus operate " + cp.r + "to avoid ")
console.log(cp.cyan + "extra" + cp.magenta + "space" + cp.blue + "auto-added by console.log.");
