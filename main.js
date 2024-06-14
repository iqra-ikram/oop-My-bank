#! /usr/bin/env node
// Class
class Bankaccount {
    accountbalance;
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    //publically credit
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("credit sucessfully get into new account and your balance is :" + this.accountbalance);
        }
        else {
            console.log("credit unsucessfull");
        }
    }
    // publically debit
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("debit successfully share in new account balance: " + this.accountbalance);
        }
        else {
            console.log("debit uncessfully");
        }
    }
}
//customer details
class customer {
    person;
    age;
    gender;
    mobile_number;
    bankaccount;
    constructor(person, age, gender, mobile_number, bankaccount) {
        //this property utalization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    //publically user acess
    display() {
        console.log("Name: " + this.person.firstname + " " + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Number:" + this.mobile_number);
        console.log("Amount in Bank:" + this.bankaccount.accountbalance);
        console.log("");
    }
}
const A1 = new Bankaccount(800);
const C1 = new customer({ firstname: "iqra", lastname: "ikram" }, 20, "female", 3009214115, A1);
C1.display();
C1.bankaccount.debit(500);
console.log();
const B2 = new Bankaccount(700);
const W7 = new customer({ firstname: "hamza", lastname: "noman" }, 25, "Male", 923313541960, B2);
W7.display();
W7.bankaccount.debit(200);
console.log();
export {};
