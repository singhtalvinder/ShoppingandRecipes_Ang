export class Ingredient {
    // public name: string;
    // public amount: number;

    // constructor(name: string, amount: number) {
    //     this.name = name;
    //     this.amount = amount;

    // }
    // Alternate to above method is to create an accessor  in constructor  in from of the
    // arguments, which creates with these parameters.
    constructor(public name: string, public amount: number){}
}