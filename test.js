cp = require("./colorplus.js");

for (key in cp.color_def)
{
	var tmp = "[" + key + "]";
	while(tmp.length < 9) tmp += " ";
	console.log(cp[key] + tmp + cp.r);
	console.log(cp["H" + key] + tmp + cp.r);
}