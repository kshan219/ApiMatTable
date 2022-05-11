export interface IRandomUsers 
{
    gender:  string;
    email: string;
    phone: string;
    name: string;
    nat: string;
    age: string;
    first: string;
}

export class rand implements IRandomUsers
{
    constructor(public gender: string, public email: string, 
        public phone: string, public name: string, 
        public nat: string, public age: string, public first: string) {}
}
