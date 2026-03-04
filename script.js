// // //  Task 1
// var user = {
//     name: "Shahd",
//     age: 23,
//     country: "Egypt",
//     introduce: function() {
//         console.log("My name is " + user.name + ", I am " + user.age + " years old and I live in " + user.country + ".");
//     },
//     skills: ["Design", "Prototyping", "Wireframing"],
//     addSkill: function(skill) {
//         user.skills.push(skill);
//     },
//     printSkills: function() {
//         console.log("Skills:");
//         for (let i = 0; i < user.skills.length; i++) {
//             console.log("- " + user.skills[i]);
//         }
//     }
// }
// user.introduce();
// user.printSkills();
// user.addSkill("UX Research");
// user.printSkills();
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// for (Object in user){
//  console.log(Object +":"+ user[Object]);
// }




// //  Task 2

// function multiplier (num){
// return function second (num2){
// return num* num2;}
// }
// var fun=multiplier (5);
// console. log(+fun(5));
//  var arr=[];
// arr.push(multiplier (3)(3));
// console.log(+arr);
// var obj={
// mult:multiplier (6)
// }
// console.log(+obj.mult(6));
//  function another (fun1, x) {
//      return fun1(x);
// }
// var y=multiplier(7);
// console.log( +another(y,7));





// //  Task 3

// function sumAll() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }
// sumAll(7, 15);
// sumAll(1, 2, 3);
// sumAll(1, 2, 3, 4);





// Task 4 

// var student = {
//   name: "Shahd",
//   grade: "A"
// };
// function printStudent(prefix, suffix) {
//   console.log(prefix + " " + this.name + " got grade " + this.grade + suffix);
// }
// printStudent.call(student, "Student", "!");
// printStudent.apply(student, ["Result:", "."]);
// var customPrint = printStudent.bind(student, "Welcome", "~");
// customPrint();
