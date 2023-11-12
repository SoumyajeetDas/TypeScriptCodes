interface infType{
    Name: string,
    Age: number,
    greet:()=>void
}

let obj:infType ={
    Name: "Soumyajeet",
    Age: 20,

    greet: ()=>{
        console.log(this.Name);
    }
}

obj.greet();


// function cal(a:number, b?:number):number {
//     return a+b;
// }

// console.log(cal(2,3));