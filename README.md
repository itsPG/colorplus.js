ColorPlus.js
============

A painless way to color your console in node.js.
-----------------------------------------------



To Install
==========

`npm install colorplus`


To Use
======

If you don't want **colorplus** adds attributes to your String :

	var cp = require("colorplus");
	console.log("This is", cp.yellow, "Color", cp.red, "Plus", cp.r, "Test");

Let **colorplus** add! So you may use **colorplus** in both ways:

	var cp = require("colorplus");
	cp.enable(); // enable string attributes.

	// methoud 1:
	console.log("This is", cp.yellow, "Color", cp.red, "Plus", cp.r, "Test");
    // methoud 2:
	console.log("This is ", "Color".red, "Plus".yellow, "Test");

You may also change the background color by prefix "bg"

	// methoud 1:
	console.log(cp.bggreen, "Background", cp.bgcyan, "color", cp.bgyellow, "test", cp.r);
	// methoud 2:
	console.log("Background".bggreen, "color".bgcyan, "test".bgyellow);

Use operator+ to avoid extra spaces in console.log

	// methoud 1:
	console.log(cp.bggreen + "Background" + cp.bgcyan + "color" + cp.bgyellow + "test" + cp.r);
	// methoud 2:
	console.log("Background".bggreen + "color".bgcyan + "test".bgyellow);

Mix color and bgcolor

	// methoud 1:
	console.log(cp.bgred, cp.yellow, " ~ WARNING COLOR ~", cp.r);
	// methoud 2:
	console.log(" ~ WARNING COLOR ~".bgred.yellow);





License
=======

Copyright(C) 2013 PG @ SENSE Lab

This project is distributed under the MIT License.


Todo list
=========

(Done) I'm planning to apply the function to String.prototype.
So you may use String("test").red to color it.

Feel free to improve this module by give me suggestion or pull requests. 


