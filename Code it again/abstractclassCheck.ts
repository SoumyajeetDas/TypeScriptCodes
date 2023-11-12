abstract class TakePhoto {
    constructor(cameraMode: string, filter: string) {

    }

    // If we don't want to implement any function just write abstract in front of the function
    abstract getSepia(): void

    // If we implement we don't have to write the abstract
    getReelTime(): number {
        return 8;
    }
}


class Instagram extends TakePhoto {


    constructor(public cameraMode: string, public filter: string, busrt: number) {

        // burst parametr is not derived from the super class so no need to add into super().
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log(this.cameraMode);
    }
}


const hc = new Instagram("teast", "Test", 2);

// Able to access the function of the super class from the object of the child class
hc.getReelTime();



export { }