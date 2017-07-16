export class Reflow{
    
    clientkey:string;
    type:string;
    count:number;

    constructor(clientkey:string, type:string)
    {
        this.clientkey = clientkey;
        this.type = type;
        this.count = 0;
    }
}