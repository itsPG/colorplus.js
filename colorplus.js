module.exports = (function()
{
	var color_def = [];
	color_def["red"] = "1";
	color_def["green"] = "2";
	color_def["yellow"] = "3";
	color_def["blue"] = "4";
	color_def["magenta"] = "5";
	color_def["cyan"] = "6";
	color_def["white"] = "7";

	var esc = "\u001b";

	function ansi_color(highlight, color, bgcolor, debug_flag)
	{
		if (highlight == undefined) highlight = "0";
		//if (bgcolor == undefined) bgcolor = "40";
		var tmp = esc + "[" + highlight + ";3" + color;
		if (bgcolor) tmp += ";4" + bgcolor;
		tmp += "m";
		//if (debug_flag) console.log("ansi_color", "[" + highlight + "; 3" + color + "m");	
		return tmp;
	}
	var r = 
	{
		apply_to_string:function(attr_name, func)
		{
			Object.defineProperty(String.prototype, attr_name, {get:func});
		},
		C:function(highlight, color, bgcolor)
		{
			return ansi_color(highlight, color, bgcolor, 1);
		},
		reset:esc + "[0m",
		r:esc + "[0m",

	}
	
	for (key in color_def)
	{
		r[key] = ansi_color("0", color_def[key]);
		r["H" + key] = ansi_color("1", color_def[key]);
	}

	return r;
	
})();
