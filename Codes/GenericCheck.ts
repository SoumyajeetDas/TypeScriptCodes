function func<T>(data:T):T{

    let data1:T = data;

    return data1;
}


console.log(func("Soumya"));

console.log(func(20));

console.log(func({name: "Soumyajeet", age:20}));