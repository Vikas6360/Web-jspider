        // functions 
        // function is block of code or set of instruction execute whenever it is called or invoked
        // function is reusablilty block of code 

        // let a = 10
        // let b = 20
        // console.log(a +b);

        // let c= 30
        // let d = 40
        // console.log(c + d);
        


        // FUNCTION DECL
        // function function_Name(){  
        //     console.log("hii hello im function"); 
        // }

        // function_Name() // FUNCTION INVOKCATION

    //  TYPES OF FUNCTIONS

    // 1 . NAMED FUNCTION  : the function which has name is called named function
    //     function demo(){ // nonparam
    //         console.log("hii demo how r u ...?");
    //         console.log("im last statement");
    //         return 10
    //         return "hii hello" 
    //         return true
    //     }
    //    console.log( demo());
    // console.log( add(2 ,3));

    //    function add(a , b){ //parameterized function
    //     return a+b 
    //    }

// 2 .anonymous  function :function which does not have any name is called 

//       function(){
//         console.log("hii im anoymous function");
//         return "hii hello bye"
//       }
//    console.log(   shona());

   //3. function with expression
   // A function expression is a way to define a function inside an expression, most commonly by assigning an anonymous or named function to a variable
   // LHS  = RHS

    // let shona =   function(){
    //     console.log("hii im anoymous function");
    //     return "hii hello bye"
    //   }

    //4 . first class function  / first call citizen

    // the function which is stored inside a variable and passed as argument or value to another function 
    // only that RHS side function is called first class function / first call citizen 
    
    // let shona =   function(){
    //     console.log("hii im anoymous function");
    //     return "hii hello bye"
    //   }

    //5 . arrow function 
    // it was intro in ES-6 
    // it used to reduce syntax 

   // syntax of arrow function : ()=>{}  ((): parath  => fat arrow  {} : curly braces)
 // rules  of arrow function
 // 1. if we have single return statement in a arrow function block we can remove curly braces and return keyword
 // 2. arrow function implicitly return value if we have single statement 
 // 3. if there is single parameter we remove para...
 // 4. arrow function cannot be hoisted 


//  arr()
//    let arr = ()=> "hii im arrow function"
//    console.log(arr());

//    let add = a =>a * a

// //    console.log(add(2,4));
//    console.log(add(2));

// 6 . higher order function 
// the function which accept another function as an arguments


// function hof(callback){
//     console.log(callback());
// }
// hof(demo)

// function demo(){ 
//     return "hii hello"  
// }

// // 7. callback function

// // function which passed as an argument to another function is called callback function 


// function operation(a , b ,callback){
//     console.log(callback(a,b));
// }

// function add(a , b){
//     return  a+ b
// }

// function sub(a , b){
//     return a- b
// }

// operation(2 , 3 , add)

