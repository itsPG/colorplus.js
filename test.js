cp = require("./colorplus.js");
cp.enable();
console.log(String("test").red.bgyellow);
console.log(String("test").bgyellow);

//cp.enable();

if (1)
{
	for (key in cp.color_def)
	{
		var buf = "";
		var color = "[" + key + "]";
		while(color.length < 9) color += " ";

		for (key2 in cp.color_def)
		{
			buf += cp[key] + cp["bg" + key2] + color + cp.r;
		}
		buf += "\n";


		for (key2 in cp.color_def)
		{
			buf += cp["D" + key] + cp["bg" + key2] + color + cp.r;
		}
		console.log(buf);


	}
}

// for (key in cp.color_def)
// {
// 	var buf = "";
// 	var color = "[" + key + "]";
// 	while(color.length < 9) color += " ";

// 	for (key2 in cp.color_def)
// 	{
// 		buf += cp.C(0, cp.color_def[key], cp.color_def[key2]) + color + cp.r;
// 	}
// 	buf += "\n";


// 	for (key2 in cp.color_def)
// 	{
// 		buf += cp.C(1, cp.color_def[key], cp.color_def[key2]) + color + cp.r;

// 	}
// 	console.log(buf);

// }


// console.log(cp.e + "[33mdfdf" + cp.e + "[1;33;41masdfasdf");