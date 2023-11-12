interface shape{
    area:()=>number;    
}

class rectangle implements shape {
    width:number;
    private readonly height:number;

    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }
    
    area(){
        console.log(`Width: ${this.width} Height: ${this.height}`)
        return(this.width*this.height);
    }   
    
    rectanglefunction(){
        console.log("Hi I am rectangle");
    }
}

class square extends rectangle implements shape {
    constructor(width:number)
    {
        super(width, width);
        // console.log("Super Width : "+super.width);
        super.rectanglefunction();
    }   
}

let r = new rectangle(2,5);

console.log(`Area of rectangle is ${r.area()}`);

let s = new square(2);

console.log(`Area of square is ${s.area()}`);

