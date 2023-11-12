var x:(string|boolean)[] = [true,'Hello','Happy'];
x.push(false);
x[1]="Soumya";

x.forEach((n)=>{
    console.log(n);
});

const names: readonly string[] = ["Dylan"];
// names[0]="Soumya";

console.log(names)