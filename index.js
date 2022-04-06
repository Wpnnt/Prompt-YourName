var name = prompt("What is Your Name ?");
var firstChar = name.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCaseFirstChar + restOfName;
alert(" hello " + capitalisedName);
