module.exports = (function()
{
	var color_def = [];
	color_def["black"] = "0";
	color_def["red"] = "1";
	color_def["green"] = "2";
	color_def["yellow"] = "3";
	color_def["blue"] = "4";
	color_def["magenta"] = "5";
	color_def["cyan"] = "6";
	color_def["gray"] = "7";

	var esc = "\u001b";

	function ansi_color(highlight, color, bgcolor, debug_flag)
	{
		
		var tmp = "[";
		if (highlight) tmp += "1";
		else tmp += "0";
		if (color) tmp += ";3" + color;
		if (bgcolor) tmp += ";4" + bgcolor;
		tmp += "m";
		console.log(tmp);	
		return esc + tmp;
	}
	var r = 
	{
		color_def:color_def,
		apply_to_string:function(attr_name, func)
		{
			Object.defineProperty(String.prototype, attr_name, {get:func});
		},
		C:function(highlight, color, bgcolor)
		{
			return ansi_color(highlight, color, bgcolor);
		},
		reset:esc + "[0m",
		r:esc + "[0m",
		e:esc,
	}
	
	for (key in color_def)
	{
		r[key] = ansi_color(0, color_def[key]);
		r["H" + key] = ansi_color(1, color_def[key]);
		r["bg" + key] = ansi_color(1, 0, color_def[key]);
	}

	return r;
	
})();
