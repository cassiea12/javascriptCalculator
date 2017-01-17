
// 2*3+1 = (7)
// (clear)
// 2*3+1= (4)

// firstNum 
// operation *
// secondNum 2


var maxLength = '10'; //max digits in display
var firstNum = '0'; 
var secondNum = '0';
var operation = '0';
var answer = 0;
var wasEqualPressed = false;


// IF DIGIT IS PUSHED RUN THIS: 
function displayDigit(number){ //If a numerical digit is pushed, run this function
	if(firstNum.length > 10) { //if more than 10 digits in display...
		document.Calculator.Display.value = 'error';
	}else{
		if(firstNum === '0') { // first num pushed always passes this
	 		firstNum = number;
	 		document.Calculator.Display.value = firstNum; // displays first number pushed
		} else if(number === '.') { // if displayDigit parameter passes a decimal as the argument...
			findDecimal(number); //run this function
		} else{ // second + nums pushed always passes this
			firstNum = firstNum + number;
			document.Calculator.Display.value = firstNum;
		}
	}
	console.log(firstNum, secondNum, operation, answer, wasEqualPressed);
}

//IF DECIMAL IS PUSHED RUN THIS:
function findDecimal(number){
	if(firstNum.indexOf(".") === -1) { // decimal does not exist
		document.Calculator.Display.value = firstNum = firstNum + '.'; //display a decimal
	} else if(firstNum.indexOf(".") > -1) { //if a decimal already exists, don't display it again 

	}
}	

//IF OPERATOR IS PUSHED RUN THIS:
function displayOperator(operator) { //OPERATOR button has been pushed, activates this.
	if(operation === '0') { // an add,minus,divide, or multiply button has been pushed for FIRST time 
		operation = operator; // OPERATOR (+ , - , * , /) is now stored in variable OPERATION
	}else if(wasEqualPressed){ // if equal sign was pressed previously
		operation = operator;
	}else { //operation button has been pushed AFTER first time, and = hasn't been pressed
		displayAnswer(false);
		operation = operator;
	}
	
	secondNum = firstNum; // secondNum holds old value, firstNum cleared out so new nums can be stored
	firstNum = '0';
}

//IF = IS PUSHED RUN THIS
function displayAnswer(flag) { 
	wasEqualPressed = flag;
	console.log(firstNum, secondNum, operation, answer, wasEqualPressed);
	var firstNumConvert = parseFloat(firstNum); //convert the strings into numbers
	var secondNumConvert = parseFloat(secondNum); 

	switch(operation){ // calculate answer
	case '+' :
		answer = secondNumConvert + firstNumConvert;
		document.Calculator.Display.value = answer;
		secondNum = '0';
		firstNum = answer;
		break;
	case '-' :
		answer = secondNumConvert - firstNumConvert; 
		document.Calculator.Display.value = answer;
		secondNum = '0';
		firstNum = answer;
		break;
	case '*' :
		answer = secondNumConvert * firstNumConvert; 
		document.Calculator.Display.value = answer;
		secondNum = '0';
		firstNum = answer;
		break;
	case '/' :
		answer = secondNumConvert / firstNumConvert; 
		document.Calculator.Display.value = answer;
		secondNum = '0';
		firstNum = answer;
		break;
	default :
		console.log('error in displayAnswer function');
	}

}

//IF CLEAR IS PUSHED RUN THIS:
function displayClear() { // when clean button pushed...

	firstNum = '0';
	secondNum = '0';
	operation = '0';
	answer = 0;
	wasEqualPressed = false; // when clear is pressed, wasEqualPressed = false.

	document.Calculator.Display.value = firstNum;
}


















