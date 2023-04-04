// Activity 1
factorial = (n) => {
    if((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33))

// Activity 2
let orderCount = 0;
const takeOrder = (topping, sizeInches) => {
    console.log(`${sizeInches} inch pizza with ${topping}`);
    orderCount++;
}
console.log(takeOrder("pineapple", "12"))

// Activity 3
const pin = 9786
let balance = 50
let withdrawnCash = 0

cashWithdraw = (cash, pinInput) => {
    if (cash > 0 && cash <= balance && pinInput === pin) {
        withdrawnCash = (withdrawnCash + cash)
        balance = (balance - cash)
        console.log(`You have successfully withdrawn £${cash}`)
    } else if (pinInput !== pin) {
        console.log("Your PIN is incorrect. Please try again.")
    } else if (cash <= 0) {
        console.log("Invalid input. Please input a positive number.")
    } else if (cash > balance){ 
        console.log("Insufficient balance. Please withdraw a lower amount.")
    } else {
        console.log("Invalid input. Please input a numeric amount to withdraw and your PIN.")
    }
}

console.log(cashWithdraw("test", 9786))
