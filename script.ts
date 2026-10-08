// let a ="Hello";
// let b="Mello"
// console.log(a);
// function hello():void{
//     for (let index = 0; index< 10 ; index++) {
//         const element = 
        
//     }
    
// }

let arr:[string,number]=["abd",12];
let arrr=[]//any

enum hello{
    price=150,
    name="Mello",
    brand="Jello",

}
let current=hello
console.log(current.price);

interface User{
    id:number,
    name:string,
    class:string,
    group?:string
}
let userOne:User={
    id:2,
    name:"Abdullah",
    class:"Twelve"
}
console.log(userOne);

interface Admin extends User{
    role?:string
}
let userTwo:Admin={
      id:2,
    name:"Yahya",
    class:"Twelve",
    role:"Admin-Yahya"
}
console.log(userTwo);


