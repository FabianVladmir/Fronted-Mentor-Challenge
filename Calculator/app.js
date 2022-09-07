const display1Ele = document.querySelector(".display-1");
const display2Ele = document.querySelector(".display-2");
const resultEle = document.querySelector(".result");
const numberEle = document.querySelectorAll(".number");
const operationEle = document.querySelectorAll(".operation");
const equalEle = document.querySelector(".equal");
const clearAllEle = document.querySelector(".clear-all");
const lastClearEle = document.querySelector(".clear-last");

let dis1Num = "";  
let dis2Num = "";  
let result = null;  
let lastOperation = "";  
let haveDot = false;

/*
catches all the numbers and the point
*/
numberEle.forEach((number) => {  
  	number.addEventListener("click", (e) => {  
   	if (e.target.innerText === "." && !haveDot) {  
    	haveDot = true;  

   	} else if (e.target.innerText === "." && haveDot) {  
    	return;  
   	}  
  	dis2Num += e.target.innerText;  
   	display2Ele.innerText = dis2Num;  
   	// console.log();  
  });  
 });  

/*
traps 1 or more operations with or without decimal point
*/
operationEle.forEach((operation)=>{
	operation.addEventListener("click",(e) =>{
		if(!dis2Num) return;
		haveDot = false;
		const operationName = e.target.innerText;
		if(dis1Num && dis2Num && lastOperation){
			mathOperation();
		}
		else{
			result = parseFloat(dis2Num);
		}
		clearVar(operationName);
		lastOperation = operationName;
		console.log(result);
	});
});

/*
  clear all
*/
function clearVar(name = "") {  
  	dis1Num += dis2Num + " " + name + " ";  
  	display1Ele.innerText = dis1Num;  
  	display2Ele.innerText = "";  
  	dis2Num = "";  
  	resultEle.innerText = result;  
 } 

/*
identify the mathematical operation
*/ 
function mathOperation(){
	if (lastOperation === "x") {
		result = parseFloat(result) * parseFloat(dis2Num);
	}
	else if (lastOperation === "+") {
		result = parseFloat(result) + parseFloat(dis2Num);
	}
	else if (lastOperation === "-") {
		result = parseFloat(result) - parseFloat(dis2Num);
	}
	else if (lastOperation === "/") {
		result = parseFloat(result) / parseFloat(dis2Num);
	}
	else if (lastOperation === "%") {
		result = parseFloat(result) % parseFloat(dis2Num);
	}
}

/*
  botton equal
*/
equalEle.addEventListener("click", () => {
	if (!dis2Num || !dis1Num) {return;}
	haveDot = false;
	mathOperation();
	clearVar();
	display2Ele.innerText = result;
	resultEle.innerText = "";
	dis2Num = result;
	dis1Num = "";
});
 
/*
  clear all
*/
clearAllEle.addEventListener("click", ()=>{
	dis1Num = "";
	dis2Num = "";	
	display2Ele.innerText = "";
	display1Ele.innerText = "";
  result = "";
	resultEle.innerText = "";
});

lastClearEle.addEventListener("click",()=>{	
	display2Ele.innerText = "";
	dis2Num = "";
});

window.addEventListener("keydown", (e) => {  
  	if (  
	   e.key === "0" ||  
	   e.key === "1" ||  
	   e.key === "2" ||  
	   e.key === "3" ||  
	   e.key === "4" ||  
	   e.key === "5" ||  
	   e.key === "6" ||  
	   e.key === "7" ||  
	   e.key === "8" ||  
	   e.key === "9" ||  
	   e.key === "."  
  	) {  
		clickButtonEl(e.key);  
	   	console.log(e.key)  
	  } 
	else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {  
	   clickOperation(e.key);  
	} 
	else if (e.key === "*") {  
		clickOperation("x");  
		console.log(e.key)  
	} 
	else if (e.key == "Enter" || e.key === "=") {  
		clickEqual();  
	}  
	// console.log(e.key)  
 });


function clickButtonEl(key) {  
	numberEle.forEach((button) => {  
	if (button.innerText === key) {  
		button.click();  
		}  
	});  
} 

function clickOperation(key) {  
	operationEle.forEach((operation) => {  
	if (operation.innerText === key) {  
		operation.click();  
		}  
	});  
}

function clickEqual() {  
	equalEle.click();  
} 