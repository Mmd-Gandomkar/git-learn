
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

const Mohammad = {
    firstName: "Mohammad",
    lastName: "Gandom kar",
    age: 19,
    job: "teacher" ,
    ismarried: false,
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

console.log(Mohammad.drive())
console.log(Mohammad.ride())
console.log(Mohammad.read())
console.log(Mohammad.firstName)
console.log(Mohammad.lastName)
console.log(Mohammad.hobbies)

