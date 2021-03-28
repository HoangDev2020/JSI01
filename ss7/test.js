// ex1
let newStr = ''
function palidrome(str) {
    str.toLowerCase()
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]   
    }
    if(newStr === str) {
        console.log(true);
    } else {
        console.log(false);
    }
}
palidrome('eyes')

//ex2
function checkCashRegister(price, cash, cid) {
    var change = cash - price
    var changeCurrent
    for(let i = 0; i < cid.length; i++) {
        changeCurrent = change / cid[i][1]
        console.log(`${changeCurrent} ${cid[i][0]}`);
    }
}
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//
 //ex3
class Employees {
    constructor(name, job) {
        this.name = name
        this.job = job
    }
    displayInfor() {
        console.log(`${this.name}, ${this.job}`);
    }
}
class Manager extends Employees{
    constructor(name, job) {
        super(name, job)
        this.employeesManaged = []
    }
    addEmployees(employees) {
        if(employees instanceof Employees) {
            this.employeesManaged.push(employees)
        }
    }
}


// I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000


