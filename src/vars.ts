//----tuple : fixed lenght array where each element has a particular type
// use key value pair beacuse anything more than that is gonna make code hard to understand
//
let user : [number, string] = [1, "San"];

//----any
//iff variable does not have a type that means its type is any
let number = [];

//----enums: list of related constants
//lets assume we have shirt sizes. To group these constants we use enum
//enum always have PascalCase

//const small=1;
//const medium = 2;
//const large = 3;

enum Size {Small, Medium, Large};
//now we do not need consts and by default the values under enums starts from 0, 1, 2 i.e Small=0, Medium=1, Large=2
// Now if u want to print it then we need to define it as Size type

let mySize : Size = Size.Medium;
console.log(mySize);




