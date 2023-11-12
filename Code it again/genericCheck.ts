function check<T>(x: T[]): T[] {
    return x;
}


console.log(check([0,1,2]));
console.log(check(["Soumya","Das"]));


function check3<T,U>(x: T[],y:U): T[] {
    if(y>2) return x;

    else return [...x,...x];
}


console.log(check3([0,1,2],4));
console.log(check3(["Soumya","Das"],1));



const check1 = <T> (x:T[]): T =>{
    return x[2];
}


console.log(check1([0,1,2,3,4]));
console.log(check1(["Soumya","Das",'Khokha','Boka']));


const check2 = <T, U> (x:T[], y:U): T =>{

    if(y>2){
        return x[1];
    }

    else return x[2];
}


console.log(check2([0,1,2,3,4],4));
console.log(check2(["Soumya","Das",'Khokha','Boka'],1));



interface User{
    name:string,
    age:number
}


function checking<User>(user:User):User{
    return user;
}


console.log(checking({name: "John", age:20}));


export{}