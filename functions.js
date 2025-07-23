//globle scope//let a=3;
//function say(){
  //  console.log("globle scope")
    //console.log("within"+a);

//}
//say()
//console.log("outside"+a);

 //function scope
 //function say(){
   // let name="javascript";
    //console.log("globle scope");
    //console.log("within the fun"+name);

 //}
//say()

//block function
//function voting(age){
  //  if(age>=18){
    // const iscloudly=true;
    // var israining=true;
    //console.log("eligible");
    //console.log(iscloudly);
    //}
    //console.log(israining);
    //console.log(iscloudly);
//}
//voting(18)


//local scope(same as fun or block scope depending on contex)
//function say(){
 //   console.log("message");
//}
//say();
//function send(callback){
  //  console.log("message sended")
    // setInterval(callback,2000);
//}
//send(say);


let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count<5){
        Interval();
    }
}
Interval()