// this function and doProblem2 have different scopes for "text".
// you are also using "var" for both declartions which could cause issues related to scope.
var text = function doProblem1() { // Why is this both a function declaration and variable declaration?
  return "Hello, JavaScript!";
};

alert(text());


function doProblem2() {
	var text = alert("Another message from JavaScript!");
	// There is no need to declare this variable in here unless you plan on using it again within the scope of this function, and you won't need to return anything because alert will execute when this function is called.
}


function doProblem3() {
	
  var makeitred = document.getElementById("target"); // unused variable.
  // convention for JavaScript variables uses camelCase. makeitred should be makeItRed.
	document.getElementById("target").innerHTML = "JavaScript is a dynamic language.";
	/*makeitred.style.color = 'red';*/ // unless you want to use makeitred here
  document.getElementById('target').classList.add('makeitred'); // but it looks like makeitred is a class you add here.
  // CSS convention used kebob-case. should be document.getElementById.('target').classList.add('make-it-red');
  // You can remove any lines you aren't using.
}	
	

function doProblem4() {
  // I assume you know what's happening here, so this looks good. 
	var hobbies = ["Technology", "Cars", "Sports"];
	hobbies.push('Travel');
	
	for(var i = 0; i < hobbies.length; i++) {
    alert(hobbies[i]);
	}
}