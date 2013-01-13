ColorPlus.js
============

A painless way to color your console in node.js.
-----------------------------------------------

Colorplus.js is a lazy option for those who want to print colored logs without learnning any other lib.

[Colorplus in github](https://github.com/itsPG/colorplus.js)


To Install
==========

`npm install colorplus`


To Use
======

	require("colorplus").enable();

	console.log("Welcome".green, "To".bggreen, "Color".yellow, "Plus".red, "modules".bgblue.cyan);


Demo
====

![screenshot](https://raw.github.com/itsPG/colorplus.js/master/screenshot.jpg)

---------------------------------------------------------------------------------------------------


Examples
============

Setup
-----

	require("colorplus").enable();
	console.log("This is ", "Color".red, "Plus".yellow, "Test");


Usage 
-----

Change the background color by prefix "bg"

	console.log("Background".bggreen, "color".bgcyan, "test".bgyellow);

Use operator+ to avoid extra spaces in console.log

	console.log("Background".bggreen + "color".bgcyan + "test".bgyellow);

Mix color and bgcolor

	console.log(" ~ WARNING COLOR ~".bgred.yellow);

You may use colorplus.js to produce ansi color code.

	var cp = require("colorplus").enable();
	console.log(cp.bggreen, "Background", cp.bgcyan, "color", cp.bgyellow, "test", cp.r);
	console.log(cp.bggreen + "Background" + cp.bgcyan + "color" + cp.bgyellow + "test" + cp.r);
	console.log(cp.bgred, cp.yellow, " ~ WARNING COLOR ~", cp.r);


Setup without modifying String.prototype
----------------------------------------

Only when you don't want **colorplus** adds attributes to your String :

	var cp = require("colorplus");
	console.log("This is", cp.yellow, "Color", cp.red, "Plus", cp.r, "Test");

Color List
==========

![screenshot](https://raw.github.com/itsPG/colorplus.js/master/colordemo.jpg)


License
=======

Copyright(C) 2013 PG @ SENSE Lab

This project is distributed under the MIT License.


Todo list
=========

* (Done) I'm planning to apply the function to String.prototype.
So you may use String("test").red to color it.
* DarkColor (document not ready yet)
* CustomCode (document not ready yet)


Feel free to improve this module by give me suggestion or pull requests. 


