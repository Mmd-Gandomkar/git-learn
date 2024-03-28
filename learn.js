
jamotaf = function (amalgar, numbers) {
return{
    add:numbers[0] + numbers[1] + numbers[2] + numbers[3] ,
    min:numbers[0] - numbers[1] - numbers[2] - numbers[3] ,
    mult:numbers[0] * numbers[1] * numbers[2] * numbers[3] ,
    dev:numbers[0] / numbers[1] / numbers[2] / numbers[3] ,
} [amalgar]
}
console.log(jamotaf('add',[20,30,5,2] ));
console.log(jamotaf('dev',[20,30,5,2] ));
console.log(jamotaf('mult',[20,30,5,2] ));
console.log(jamotaf('min',[20,30,5,2] ));

//tamrin avale class jalase 4 
const Mohammad = {
    firstName: "Mohammad",
    lastName: "Gandom kar",
    age: 19,
    job: "teacher" ,
    ismarried: false,
    joda_konanade: "                   " ,
    hobbies: ["Driving" , "Riding" , "reading"] ,

    drive : function () {
        return 'I CAN DRIVING' ;
    },
    ride : function () {
        return ' I CAN RIDING A BICYCLE' ;
    },
    read : function () {
        return ' I CAN READING';
    },
    
    
}

console.log(Mohammad.drive());
console.log(Mohammad.ride());
console.log(Mohammad.read());
console.log(Mohammad.firstName);
console.log(Mohammad.lastName);
console.log(Mohammad.hobbies);

const ages = [12, 24 ,48 ,45 ,54 ,15,] ;
 
let total = 0 ;

for (let i = 0; i < ages.length; i++) {
   console.log(ages[i]);
  total += ages[i];
    
};
console.log(Mohammad.joda_konanade);

console.log(total) ;


function randomNumbers(rand ) {
    const random = Math.floor(Math.random() * 1000) ;
    const random1 = Math.floor(Math.random() * 1000) ;
    const random2 = Math.floor(Math.random() * 1000) ;

rand(random, random1,random2);
  
} ;

randomNumbers( function (a, b, c) {
     console.log('rand',b, 'rand1',a , 'rand2', c , 'hasel zarb rands =', a * b * c )
}) 

ages.forEach(function (v, i) {
    total += v
console.log(v , i)
}) ;

// map -> [10] => [10] :))

const addedAges = ages.map(function (value) {
    return value + 10 ;
});

console.log(addedAges);

// find -> show only first value -_-

const findAges = ages.find(function (value){
    if (value >= 48) return value ;
});

console.log(findAges);

// filter -> show all values we want :)

const filteredAges = ages.filter(function(value) {
    if (value >= 45) return value ;

});
console.log(filteredAges) ;

// tamrin khodam :))

const added_filtered_Ages = filteredAges.map(function(value){
    return value / 3 *2 ;
});
console.log(added_filtered_Ages);

const news = [
    {id: 0, title: "News Item 1", isRead: true},
    {id: 1, title: "News Item 2", isRead: true},
    {id: 2, title: "News Item 3", isRead: true},
    {id: 3, title: "News Item 4", isRead: false},
    {id: 4, title: "News Item 5", isRead: true},
    {id: 5, title: "News Item 6", isRead: false},
];

// Sow indicator
const mustNotShowIndicator = news.every(function(item){
    return item.isRead;
});

console.log(mustNotShowIndicator)

const mustShowIndicator2 = news.some(function(item){
    return !item.isRead;
});

console.log(mustShowIndicator2);

// peyda kon
  
const findUnreads = news
.filter(function(item){
    if(item.isRead === false) return item;
})
 
.map(function(item){
    return item.id;
});
console.log(findUnreads.length);
console.log(findUnreads);

// Ostad :))))

console.log({
    Show: findUnreads.length > 0,
    count: findUnreads.length,
});

// function Statement

Sey();

function Sey() {
    console.log("sey")
};

// function Expression

//Sey1() ===> Cannot access 'Sey1' before initialization


const Sey1 = function() {
    console.log("sey")
};
Sey1();

// Arrow function
const plus = () => 2 + 2 ;
console.log(plus())

// Array , Object
// Spread Operator
// rest Operator


/// spread
const class1 = ['a' , 'b'];

const class2 = ['d' , 'e'];

const classtotoal = [...class1 , ...class2];

console.log(classtotoal);


//String -> Immutable
const str = "Abc Dfg Hig Klm Nop Qrs Tuv Wxyz"
console.log(
str.length,
str.toLowerCase(),
str.toUpperCase(),
str.charAt(20),
str.charCodeAt(0), //ASCII 
str.indexOf(" "),
str.lastIndexOf(" "),
str.slice(
    // 0, 28  ✔️✅

    str.indexOf("D"),
    str.indexOf("o")
),
str.substring(8, 18),
str.replace( 'o', 'z'),
str.split(' ').join('-')
);

//Password validator
const isValidPassword = (pass) => {
    let isUpper  = false;
    let isLower  = false;
    let isNumber = false;

    for (let validator of pass.split('')) {
         const character = validator.charCodeAt(0);
         if(character > 64 && character < 91 )  {isUpper  = true} 
         if(character > 96 && character < 123)  {isLower  = true} 
         if(character > 47 && character < 58 )  {isNumber = true} 
    }
    return isLower && isUpper && isNumber && pass.length >= 8
} 

console.log(isValidPassword('1s2d1s2D'));


const GenerateRandomPassword = () => {
    const length = 8;
    const Lower = 'abcdefghigklmnopqrstuvwxyz';
    const Upper = Lower.toUpperCase();
    const Num = '0123456789';
    let Password = '';

    Password += GetPass(Lower);
    Password += GetPass(Upper);
    Password += GetPass(Num);

    for (let i = 3; i < length; i++) {
        CharacterTypes = [Lower, Upper , Num];
        CharTypes = CharacterTypes[Math.floor(Math.random() * CharacterTypes.length)];
        Password += GetPass(CharTypes);
    }
    return shuffle(Password);
};

const GetPass = (CharType) => {
    return CharType.charAt(Math.floor(Math.random() * CharType.length));
};
const shuffle =  (str) => {
    var a = str.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");};

console.log(GenerateRandomPassword());

const ages1 = [13, 22, 25 , 33] ;

console.log(ages1.reduce((pervi , cure) => {
return pervi + cure ;
 }, 0));

 let rawData = [
    { name : 'Animals'   , id : 10} ,
    { name : 'Batteries' , id :  7} ,
    { name : 'Baggage'   , id : 12} ,
    { name : 'Cake'      , id : 17} ,
];

// const Group = {
//     10 :{ Group : 'A' , items : [{ name : 'Animals' ,  id : 10}]} ,
//      7 :{ Group : 'B' , items : [{ name : 'Batteries', id :  7}]} ,
//     12 :{ Group : 'C' , items : [{ name : 'Baggage',   id : 12}]} ,
//     17 :{ Group : 'D' , items : [{ name : 'Cake',      id : 17}]} ,
// };

// const Groups = rawData.reduce ((group , rawData) => {
//     const { id } = rawData;
//     group[id] = group[id] ?? [];
//     group[id].push(rawData);
//     return group;
// }, {});
// console.log(Group);

 const data = Object.values(rawData.reduce((p , c) => {
       const group = c.name[0];
       

        if (!p[group]) p[group] = { group: group, items: [c]}
        else p[group].items.push(c)
       return p;
 }, {}));
 console.log(data);



const sentence = 'lorem ipsum dolor emet ipsum dollar';
const targetCharacter = 'm';


const count = sentence.split('').reduce((prev, cur) => {
    if (cur === targetCharacter) {
        return cur.length ;
    } else { return prev ;}

    // Ternary Operator  *******************************************************************

    // return cur === targetCharacter ?  prev + 1 :  prev ;
}, 0);
    console.log(count);

//  class / object

function Apartment ({no , name})  {
    this.no = no;
    this.name = name;

    this.elevator = () => {
        // return 'I am ' + name;
        /**  Tempelate Literal             *     *         *  **/
        return `I am ${name}`
    } 
};
  

const v1 = new Apartment ({ no : 1 , name : 'a'});
const v2 = new Apartment ({ no : 2, name : 'b'});


console.log(v1.elevator());
console.log(v2);

var x = 1;
console.warn(++x === x++);




// selector in DOM

// console.log(
//     document.getElementsByTagName('div') ,
//     document.getElementById('test') , 
//     document.querySelector('h1#test') ,
//     document.querySelector('#test') ,
//     document.querySelectorAll('a[href="test-href"]')
//     );

    //new ELEMENT      
    const newElement = document.createElement('div') ;
    newElement.innerText = ' NEW ELEMENT ADDED' ;
    newElement.style.backgroundColor = 'yellow' ;
    newElement.style.color = ' red' ;

    const newElement1 = document.createElement('div') ;
    newElement1.innerText = ' NEW ELEMENT1 ADDED' ;
    newElement1.style.backgroundColor = 'yellow' ;
    newElement1.style.color = ' red' ;

    const newElement2 = document.createElement('div') ;
    newElement2.innerText = ' NEW ELEMENT2 ADDED' ;
    newElement2.style.backgroundColor = 'yellow' ;
    newElement2.style.color = ' red' ;

    const newElement3 = document.createElement('div') ;
    newElement3.innerText = ' NEW ELEMENT3 ADDED' ;
    newElement3.style.backgroundColor = 'yellow' ;
    newElement3.style.color = ' red' ;
    

    document.getElementById('container').append(newElement) ;
    document.getElementById('container').prepend(newElement1) ;
    document.getElementById('container').after(newElement2);
    document.getElementById('container').before(newElement3);
