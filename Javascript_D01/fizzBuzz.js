function fizzBuzz() {
   return console.log("fizzBuzz")
    //{function fizz(){
      // return console.log("fizz")
    //{function Buzz() {
      // return console.log("Buzz")
}
    var x=20;
    for (i=1; i<=x;++i)
     if ((i%3)==0) {console.log("fizz")}
     else 
     if ((i%5)==0) {console.log("Buzz");}
     else
     if (((i%5)==0) && ((i%3)==0)) {console.log("fizzBuzz");}
     console.log(i+",");
return i;