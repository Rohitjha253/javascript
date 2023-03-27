// alert("hello world");

//console.log('Hello world');

//console.warn('Hello world');


// let & const -> block level scope

//const age = 30;
//age = 35; 

/*
let age = 30;
age = 35;
console.log(age);

*/


// String, Number, Boolean, null, undefined
// Symbol

const name = 'Nkdebug';
const age = 30;
const rating= 4.5;
const isProgrammer = true;
const x = null;
const y = undefined;
let z;


// console.log(typeof z);



const name1 = 'Nkdebug';
const age1 = 30;

// concatenation
// console.log('My name is '+name1+' and I am '+age1);

// template String
// console.log(`My name is ${name1} and I am ${age1}`);

/*

const s = 'Hello World'
console.log(s.length);


console.log(s.toLowerCase());

console.log(s.substring(0,5).toUpperCase());

console.log(s.split(' '));

*/


// Arrays -> variables that hold multiple values

//const fruits = ['apples', 'oranges', 'pears', 10, true]


//console.log(fruits);

/*
const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';
fruits.push('mangoes');

fruits.unshift('guava');

fruits.pop();*/

//console.log(fruits);


//console.log(Array.isArray('hello'));


//console.log(fruits.indexOf('oranges'));


// objects

// json
const person = {
    firstName: 'Nitesh',
    lastName:'Kr',
    age:30,
    hobbies: ['reading', 'sports','yoga'],
    address: {
        street: '2nd Main Road, H-Block',
        city: 'Bangalore',
        state: 'KA'
    }
}

//console.log(person.address);





const {firstName ,lastName} = person;

//console.log(firstName);



person.email = 'nkdebug@gmail.com'

//console.log(person);






const todos = [

    {
        id:1,
        text:'Finish Javascript',
        isCompleted: true
    },
    {
        id:2,
        text:'Finish HTML',
        isCompleted: true
    },
    {
        id:3,
        text:'Finish React',
        isCompleted: false
    },
];






//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);


// for
for(let i=0;i<10;i++) {
  // console.log(i);
}

// while -> research on it


/*
for(let i=0;i<todos.length;i++) {
    console.log(todos[i].text);
}


for(let todo of todos) {
    console.log(todo.text);
}


// forEach, map, filter

todos.forEach(function(todo) {
   // console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoText = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoText);


const x1 = 10;

if(x1 === 10) {
    console.log('x1 is 10');
} else if(x1>10) {
    console.log('x1 is greater than 10');
}
else {
    console.log('x1 is not 10');
}

const y1 = 11;
const color = y1>10 ? 'red': 'blue';

switch(color) {

    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;    

    }


// normal fn.
function addNums(num1=1, num2=2) {
    return num1 + num2;
}

console.log(addNums(5,4));

// arrow func.
const addNums = (num1=1, num2=2) => {
    return num1 + num2;
}

console.log(addNums(5,4));


const addNums = (num1=1, num2=2) => num1 + num2;


*/







// contructor function
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}


Person.prototype.getBirthYear = function() {
    this.dob.getFullYear();
}


Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate Object

const person1 = new Person('nkdebug', 'kr','4-3-1993');
const person2 = new Person('nkdebug1', 'kr1','4-3-1993');


console.log(person1.dob.getFullYear());

console.log(person1.getFullName());

console.log(person1);



*/

/*
DOM manipulation 


// single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('ul'));









// multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item')
items.forEach(item => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'nitesh';

ul.children[1].innerText = 'nkdebug';


ul.lastElementChild.innerHTML='<h4>AXIS BANK</h4>'



const btn = document.querySelector('.button');
btn.style.background = 'red';



const btn = document.querySelector('.button');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('#my-form')
    .style.background = '#ccc'


    document.querySelector('body')
    .classList.add('bg-dark')

    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';

});

*/


/*
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000)

    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));


        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';

    }

}
*/
console.log(document.querySelectorAll('.items'));
















