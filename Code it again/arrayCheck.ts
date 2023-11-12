let arr: Array<string> = [];

arr.push("Soumyajeet");



function arraycheck(arr: string[]): void {
    arr.forEach((x: string) => {
        console.log(x);
    })
}


arraycheck(["1", "2", "3", "4"]);



type User = {
    name: string,
    age: number
}


let arr1: User[] = [];

arr1.push({ name: "Soumyajeet", age: 10 });

console.log(arr1);



