console.log("connected");

let sibling = {
    firstName: "Kisha Niña", 
    lastName: "Flores",
    age: 21,

    petNames: {
        dog1: "Kevin",
        dog2: "Choco",
        dog3: "Kylo",
        dog4: "Aki",
        dog5: "Ichiko",
        dog6: "Tata",
        cat1: "Mikay",
        cat2: "Bingo"
    },

    description: function () {
        return (`${this.firstName} ${this.lastName}, ${this.age} years old, is the youngest sibling.`);
    }
}
console.log(sibling.description());

sibling.hobby = "Eating";
console.log(sibling);

delete sibling.petNames
console.log(sibling);

//sample 1
let name = "Karen"
let hobbies = ["cooking", "reading manga", "listening to music"]

message = `Hi! I'm ${name}, one of ${sibling.firstName}'s sibling.`
console.log(message);

//sample 2
const anotherMessage = 
`
    ${name} is the second to the youngest sibling.
    Her hobbies are ${hobbies[0]}, ${hobbies[1]}, and ${hobbies[2]}.
    She also loves to cook.
    She got it from our father.
`
console.log(anotherMessage);

//Coding Exam 1
console.log("hello world")

function student(){
    let add = {
        list: [],
        add: function (name) {
            this.list.push(name);
            console.log(`${name} is added to the student's list`);
        }
    }
    return add;
}

let students = ["Jane","Joe","John"];
let studentNames = student();
students.forEach((name) => {
    studentNames.add(name);
});

function count(list){
    console.log(`There are total number of ${list.length} students in the student's list.`);
    return list.length;
}

count(studentNames.list);

//Coding Exam 2
function enumerate(list){
    list.forEach((name) => {
        console.log(`${name}`);
    });
}
enumerate(studentNames.list);

//Coding Exam 3
function check(list,find,log = true){
    let found = false;
    let i = -1;
    list.every((name,index) => {
        if(find.toLowerCase() == name.toLowerCase()){
            if(log)
                console.log(`${name} is an Enrollee`);
            found = true;
            i = index;
            return false;
        }
        return true;
    });
    if(log && !found){
        console.log(`${find.toLowerCase()} is not found on the list`);
    }
    return i;
}

let arrayInput = ["JOE","JOSEPH","JK"];

arrayInput.forEach((name)=>{
    check(studentNames.list,name);
});

//Coding Exam 4
let studentSection = [];
function addSection(name,section){
    let i = check(studentNames.list,name,false);
    if(i<0){return;}
    studentSection[i]=section;
}

let arrayInput1 = ["Jane","Joe","John"];
let arrayInput2 = ["A","A","A"];
arrayInput1.forEach((name,index)=>{
    addSection(name,arrayInput2[index]);
});

function sectionList(){
    let list = [];
    studentNames.list.forEach((name,index)=>{
        list.push(`${name} - Section ${studentSection[index]}`)
    });
    return list
}
let studentsWithSectionList = sectionList();
console.log(studentsWithSectionList)

//Coding Exam 5
function remove(name){
    let list = studentNames.list;
    let i = check(list,name,false);
    if(i<0){return;}
    let studentName = list[i];
    studentNames.list.splice(i,1);
    studentSection.splice(i,1);
    console.log(`${studentName} was removed from the student's list`);
    studentsWithSectionList = sectionList();
}

let stringInput = "Joe";
remove(stringInput);

console.log(studentNames.list);

//Coding Exam 6
const studentGrades = [
	{ studentId: 1, Q1: 89.3, Q2: 91.2, Q3: 93.3, Q4: 89.8 },
	{ studentId: 2, Q1: 69.2, Q2: 71.3, Q3: 76.5, Q4: 81.9 },
	{ studentId: 3, Q1: 95.7, Q2: 91.4, Q3: 90.7, Q4: 85.6 },
	{ studentId: 4, Q1: 86.9, Q2: 74.5, Q3: 83.3, Q4: 86.1 },
	{ studentId: 5, Q1: 70.9, Q2: 73.8, Q3: 80.2, Q4: 81.8 }
];
console.log();

for (let i = 0; i<studentGrades.length; i++)
{
    let forAve = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4)/4
    
    studentGrades[i].forAve = parseFloat(forAve.toFixed(1));
    console.log(studentGrades[i].forAve);
}
console.log(studentGrades);

for (let i = 0; i<studentGrades.length; i++)
{
    let forAve = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4)/4
    
    studentGrades[i].forAve = parseInt(forAve.toFixed(1));
    console.log(studentGrades[i].forAve);
}
console.log(studentGrades);

//Coding Exam 7
let people = [
    {
        name: 'John',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Jane',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Bob',
        age: 40,
        gender: 'male'
    }
]

function person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    return this;
}

function addPerson(count,log = true){
    people = people.concat(count);
    if(log)
        console.log(people.slice(0));
}
addPerson(new person('Mary',35,'female'));


function removePerson(name){
    people.every((person,index) => {
        if(name.toLowerCase() == person.name.toLowerCase()){
            people.splice(index,1);
            console.log(`${person.name} was removed.`);
            return false;
        }
        return true;
    });
    console.log(people.slice(0));
}
removePerson("John");

people.sort(function(a, b){return b.age - a.age});
console.log(people.slice(0));

const found = people.find(person => person.age >= 30);
console.log(found);

//Coding Exam 8
function convert(){
    let converter = {
        name1 : 'Jelly',
        convertKilogramToPounds: function (kg) {
            let pounds = kg*2.2046;
            pounds = parseInt(pounds);
            console.log(`${this.name1}'s weight in lbs is ${pounds}`);
            return pounds;
        }
    }
    return converter;
}
let c = convert();
let userInput = prompt(`Input ${c.name1}'s weight in kilograms (kg)`);
c.convertKilogramToPounds(userInput);