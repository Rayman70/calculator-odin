
function calcAdd(num1, num2) {
    return num1 += num2;
}

function calcSub(num1, num2) {
    return num1 -= num2;
}

function calcMulti(num1, num2) {
    return num1 *= num2;
}
 
function calcDiv(num1, num2) {
    return num1 /= num2;
 }

function operate(num1, num2, op) {
    if(op === "+") {
        return calcAdd(num1, num2);
    } else if (op === "-") {
        return calcSub(num1, num2);
    } else if (op === "*") {
        return calcMulti(num1, num2);
    } else if (op === "/") {
        return calcDiv(num1, num2);
    }
}


