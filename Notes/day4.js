//let number=[1,2,"three",true];
//let names=new Array("prithika","krishnan");
//console.log(number[2]);
//console.log(names.length);

//filter()-it filtered the  result arguments
//let number=[1,2,3,4,5];
//let result=number.filter(number=>number[0]);
//console.log(result);
//slice-delete the element based no index value
//let r=number.slice(1,3);
//console.log(r)

//splice- first index val wil be replaced and second index wl be removed
//let num=[1,2,3,4,5];
//num.splice(1,2,"heyy");    
//console.log(num)




//object
// let details={
//     name:"prithika",
//     totalmark:"90",
//     //nested obj
//     subject:{
//         dbms:"98",
//         java:"97"
//     },
//     avg:function(){
//         let sum= parseInt(this.subject.dbms)+parseInt(this.subject.java);
//         return sum;
//     }
// }
// console.log(details.totalmark);
// console.log(details["name"]);
// console.log(details.subject.dbms);
// console.log(details.subject["java"]);
// console.log(details.avg());

//real-life use cases
  //1)student database
  //2)employee management system
  //3)e-commerce product list
  //4)quiz question with option
  //5)movie list with rateing and game

//object destructing
  // -- is a synatx in js that allows you to extract values from object and 
  //assign them to the variables in a clean and readable way. 

//   const person={
//     name:"prithika",
//     age:18,
//     city:"ooty"
//   };

//   const{name,age,city}=person;
//   console.log(name);
//   console.log(age);
//   console.log(city);

//array destructing

const person=["prithika",18,"software developer"];
const[name,age,desigination]=person;
console.log(name+" "+age+" "+desigination+" ");
