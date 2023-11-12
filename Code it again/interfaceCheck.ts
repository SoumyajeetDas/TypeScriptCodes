interface TUser {
    readonly _id:string,
    email:string,
    userId:number,
    startTrial():string,
    getCoupon(couponname:string, value:number):string
}

interface TUser{
    name:string
}

interface Admin extends TUser {
    role : "User" | "Learner"
}

const user: TUser = {
    _id:"1",
    name:"Soumyajeet",
    email:"@outloook",
    userId:2,
    startTrial:()=>{
        return "Hello"
    },
    getCoupon:(c, v)=>{
        return c;
    }

}


let adminuser : Admin = {
    _id:"1",
    name:"Soumyajeet",
    email:"@outloook",
    userId:2,
    role:"Learner",
    startTrial:()=>{
        return "Hello"
    },
    getCoupon:(c, v)=>{
        return c;
    }
}


console.log(user.getCoupon("1st Coupon",3));


console.log(adminuser.startTrial());


export {}

