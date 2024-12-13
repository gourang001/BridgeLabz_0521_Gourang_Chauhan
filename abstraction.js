// Abstraction in JavaScript is a concept of hiding the implementation details and showing 
// only the essential features of an object or function. 
class BankAccount {
    #balance; 

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient funds");
        } else {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance; 
    }
}


const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); 
myAccount.withdraw(2000); 
