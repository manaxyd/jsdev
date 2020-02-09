

// (function(){
// var elems = document.getElementsByTagName("p"),
//     className = document.getElementsByClassName("ph"),
//     idName = document.getElementById("ph");
// //console.log(idName);
// var len = elems.length;
// //console.log(len);
//  for (var i = 0; i < len; i++){
//      //alert();
//      //console.log( elems[i].tagName );
//      //console.log( elems[i].parentNode );
//      //console.log( elems[i].previousSibling );
//  }
// })();


// BOM
// console.log(navigator.userAgent);
// console.log(window.frames);
// end BOM

// замыкание
// var firstFunc = function() {
//     var index = 5;
//     return function() {
//         return index;
//     };
// };

// var secondFunc = function() {
//     var index = 15;
//     console.log(firstFunc()());
// }

// secondFunc();
// end замыкание

// scope start

// global
// var one = 1;
// console.log(one);
// local
// function func() {
//     var two = 2;
// }

// var inner = function(){
//     var arr1 = [1,2,3];
//     for(var i = 0; i < arr1.length; i++){
//         console.log(i);
//         outer();
//         console.log('first loop');
//     }
// };
 
// var outer = function(){
//     var arr2 = [4,6,8];
//     for(var i = 0; i < arr2.length; i++){
//         console.log(i);
//         console.log('second loop');
//     }
// };

// inner();

// scope end

// фунции start

// function func1(){
//     function funcOne(){
//         return 'One';
//     }

//     var variable1 = funcOne();

//     function funcOne(){
//         return 'Two';
//     }

//     return variable1;
    
// }
// console.log (func1());

// function func2(){
//     var funcTwo = function(){
//         return 'One';
//     }

//     var variable2 = funcTwo();

//     var funcTwo = function(){
//         return 'Two';
//     }

//     return variable2;
    
// }
// console.log (func2());

// var func = function(callback){
//     var name = 'Serg';
//     return callback(name);
// }

// console.log(func(function(n){return "Hello " + n;}) );
// var arr = [1,2,3,4];
// var userInput = 55;
// arr.push(userInput);
// console.log(arr);
// var arrArg1 = function(){
//     var i, sum = 0;
//     for(i=0; i<arr.length; i++){
//         sum += arr[i];
//     };
//     return sum;
// }
// console.log(arrArg1());


// var arrArg = function(){
//     var i, sum = 0;
//     for(i=0; i<arguments.length; i++){
//         sum += arguments[i];
//     };
//     return sum;
// }
// console.log(arrArg(arr2));

// фунции end