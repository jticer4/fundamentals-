/**
 conditionals, functions, scope, and loops
 **/
/**
//equals
let equals = 1 === 1;
console.log(equals);
//greater than
let greaterThan = 5 > 1;

//less than
let lessThan = 2 < 10;

//greater than or equal to
let greaterThanEq = 5 >= 5;

//less than or equal to
let lessThanEq = 4 <= 9;

//not equals
let notEquals = 5 !== 2;
 **/
/**
let storeA = 31.10;
let storeB = 4.40;

function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price")
	} else {
		console.log("Their prices are equal")
	}
}

compareStorePrices(15, 25);
compareStorePrices(5,5);
**/

/**
function squareNum (number) {
	return number * number;
}

let squaredNum = squareNum(5);
console.log(squaredNum);
**/

/**
let x = 10;

function addNumbers(n, m, x){
	console.log(x);
	let b;
	if (1===1) {
		b = 8;
	}
	console.log(b);
	return n + m;
}

addNumbers(1, 2, 10);
**/

/**
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
let newArray = ourArray[4];
console.log(newArray[1]);
**/

/**
let ourArray = [1, 2, 3, 4, 5, 6, 7];
let arrLen = ourArray.length
for(let i = 0; i<arrLen; i++){
	//console.log("I is equal to: " +i);
	console.log(ourArray[i]);
	for(let j = 0; j<10; j++) {
		console.log('j is equal to: ' + j);
	}
}
 **/

/**
let x = 0;

while(x<10) {
	console.log("ran");
	x++
}
 **/