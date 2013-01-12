//If you don't want **colorplus** adds attributes to your String :

	var cp = require("colorplus");
	console.log("This is", cp.yellow, "Color", cp.red, "Plus", cp.r, "Test");

//Let **colorplus** add! So you may use **colorplus** in both ways:

	var cp = require("colorplus");
	cp.enable(); // enable string attributes.

	// methoud 1:
	console.log("This is", cp.yellow, "Color", cp.red, "Plus", cp.r, "Test");
    // methoud 2:
	console.log("This is ", "Color".red, "Plus".yellow, "Test");

//You may also change the background color by prefix "bg"

	// methoud 1:
	console.log(cp.bggreen, "Background", cp.bgcyan, "color", cp.bgyellow, "test", cp.r);
	// methoud 2:
	console.log("Background".bggreen, "color".bgcyan, "test".bgyellow);

//Use operator+ to avoid extra spaces in console.log

	// methoud 1:
	console.log(cp.bggreen + "Background" + cp.bgcyan + "color" + cp.bgyellow + "test" + cp.r);
	// methoud 2:
	console.log("Background".bggreen + "color".bgcyan + "test".bgyellow);

//Mix color and bgcolor

	// methoud 1:
	console.log(cp.bgred, cp.yellow, " ~ WARNING COLOR ~", cp.r);
	// methoud 2:
	console.log(" ~ WARNING COLOR ~".bgred.yellow);
