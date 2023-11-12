namespace Mensurations{
    
    export var student:string="Soumyajeet";
    interface shape{
        area:()=>number
    }

    export class Quadrilateral implements shape{

        protected readonly width:number;
        protected readonly height:number;

        constructor(width, height){
            this.width=width;
            this.height=height;
        }
        area(){
            return this.width*this.height;
        }
    }

    export let obj = {
        Name: "Soumyajeet",
        Age: 20
    }

    export let arr = [20,30,40];
  
}


