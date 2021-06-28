//Task 3.1 Создай функцию с именем getName, которая принимает один параметр. В этот параметр будет передаваться объект.
//Верни из функции ключ name этого объекта.
function getName(a){
    return a.name 
};

//Task 3.2 Создай функцию с именем getNames, которая принимает один параметр. В этот параметр будет передаваться объект.
//Верни из функции ключ массив, который содержит два элемента:
function getNames(b){
    return [b.firstName,b.lastName]
};

//Task 3.3 Создай функцию concatNames, которая принимает два параметра с именами obj и lastname
//Верни из функции строку, которая содержит в себе ключ firstname из объекта obj, а следом через пробел значение параметра lastname.

function concatNames(obj,lastname){
    return obj.firstName + " " + lastname
};


//Task 3.4 Напиши функцию correctName, которая принимает один параметр (это будет объект).

//Если в принятом объекте ключ fathername имеет значение undefined, то верни только ключ firstname.

//В ином случае верни строку, которая содержит конкатенацию следующих ключей fistname + lastname + fathername
function correctName(c){
    if(fathername === undefined){
        return c.firstName
}
  else{
      return `${c.firstname} ${c.lastname}  ${c.fathername}`
  }
};