
let  score:number | string = 33//here score can be either of dataype number or string


type User = {
    name:string;
    id:number
}

type Admin = {
    username:string,
    id:number
}
//managing 2 different data type of an element
let Innocent: User | Admin ={name:"Innocent",id:1}
Innocent = {username:"Shami",id:2}

function getDbId(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }else{
        id+2;
    }
}
//Alertering an array of number and string
const data:(string | number )[]= [2,"assfield"]

//another situation
let pi:3.14 = 3.14;//Pi will only be to have the value of the number you see
let seat:"aisle"|"middle"|"Back sites";//this also apply thr same conept







