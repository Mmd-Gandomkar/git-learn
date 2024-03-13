
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
}) ;

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
    {id: 4, title: "News Item 7", isRead: true},
    {id: 5, title: "News Item 8", isRead: false},
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
