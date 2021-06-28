//Task 1.1 В файле object-intro.js создай объект start, у которого будут два любых ключа и значения.

let user = { 
    name: "Mark" ,
    age: 25

};


//Task 1.2 В том же файле создай объект, person у которого будут следующие ключи и значения:

let person = {
fistname: "Ева",
lastname: "Халакова",
city: "Грозный",
age: 31,
height:166,
heightMeters:1.6,
born: 1989,
haveCar: false,
carName: "Ford Focus 3",
haveSkills: true,
level: 9,
mobilePhone: {
    model: "iphone",
    priceInRubles: 50,
    operatorName: "Мегафон",
    manufacturer: "США"
   }
 };




//Task 1.3
 
 let galaxy = {
    numberOfStars: 400000000000,
    core: "8300 парсек",
    size: undefined,
    traffic: "627\pm 22 км/с",
    Luminosity: "2,1+1−0,6⋅1010 ",
    disk: " 100 000 световых лет",
    weight: "6⋅1042 кг",
    milkyWay: null,
    galacticHalo: true,
    namesOfStar: {
        name: "Альтарф",
        quantity: 1,
    }
 };


 //Task 1.3.2 Пользуясь оператором delete удали из объекта galaxy любое свойство.
 //Выведи объект galaxy в консоль
delete galaxy.disk;
console.log(galaxy);


//Task 1.4 В том же файле создай объект student, в котором будет инфа о любом из твоих одногруппников.
//Инфа должна включать имя, фамилию и регион проживания.
let student = {
    firstname: "Седа",
    lastname: "Дудаева",
    region: 95

};

//Task 1.5 Добавь в объект student из задачи 1.4 новый ключ age, в котором будет возраст студента.
//Выведи объект student в консоль.
student.age=27
console.log(student);

