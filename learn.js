
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

const ages = [12, 24 ,48 ,45 ,53 ,15,] ;
 
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
})
