namespace Classes{
    export class A{
        private name:string;
        readonly value:number;
    
        public constructor(name:string, value: number){
            this.name=name;
            this.value=value;
        }
    
        greet():any{
            console.log(`This is ${this.name} with value = ${this.value}`);
        }
    };
}


let object = new Classes.A('Soumyajeet', 20);

object.greet();
console.log(object.value);

