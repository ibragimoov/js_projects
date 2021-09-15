'use_strict';

let object = {
    programmer: 'Eldar',
    age: '18',
    graduateYear: 2,
    lang: 'Javascript',
    scoreFriend: 200
};

object.books = 83;


console.log(Object.keys(object).length);

for(let keys in object) {
    console.log('Свойство объекта: ' + keys + ' имеет значение: ' + object[keys]);
}