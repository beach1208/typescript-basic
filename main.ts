
// Variable types
export{}
let message = 'Welcome Back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner : boolean = true;
let total: number = 0;
let name: string = 'James';
// name = true; type is different and causse an error

let sentece: string = `My name is ${name}
I am a beginner in TS`;

console.log(sentece);

let n: null =  null;
let u: undefined = undefined;
let isNew: boolean = null;
let myName: string = undefined;

// Both defines number arrays
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];

enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Hi';

let myVariable: unknown = 'yow';
(myVariable as string).toUpperCase();
console.log(myVariable);

let a;
a = 10;
a = true;

let b = 20;
// b = true; cant be assigned because b is number type specified already

// Only specidied value can be assigned
let multiType: number | boolean;
multiType = 20;
multiType = true;

// Any type of value can be assigned
let anyType: any;
anyType = 20;
anyType = true;



// ------ Function ----------

// Add ? next to parameters to make it Optional parameter 
function add(num1: number, num2?: number): number {
    if(num2) 
        return num1 + num2;
    else
    return num1;
}
console.log(add(5,10));
console.log(add(4));
// add(5,'10'); string cant be passed

// ---- Interface ------
// Specify Object as Type

interface Person {
    firstName: string,
    lastName: string
}
function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let person = {
    firstName: 'Bruce',
    lastName: 'Williams'
};

fullName(person);

// ----- Class --------

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('James');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();




