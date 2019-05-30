var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var result = document.getElementById("result");
var danger = document.getElementById("warning");

function errorCheck ()
{
	if(numOne.value == "" || numTwo.value == "")
	{
		danger.innerHTML = "Please Fill The Two Fields.";
		return 1;
	}

}
function add()
{
	if(errorCheck() === 1)
	{
			return;
	}

	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;

	result.innerHTML = "The Summation Is : " + (one+two);
}

function subtract()
{
		if(errorCheck() === 1)
	{
			return;
	}
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	result.innerHTML = "The Difference Is : " + (one-two);
}

function multiply()
{
		if(errorCheck() === 1)
	{
			return;
	}
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	result.innerHTML = "The Multiplication Is : " + (one*two);
}

function division()
{
		if(errorCheck() === 1)
	{
			return;
	}
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	result.innerHTML = "The Divison Is : " + (one/two).toFixed(2);
}