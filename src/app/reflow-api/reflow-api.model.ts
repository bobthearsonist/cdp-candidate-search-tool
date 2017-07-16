export class ReflowRequestFactory{

}

export class ReflowRequest{
    id:string;
    type:string;
    directions:string;

    constructor(id:string,type:string,directions:string)
    {
        this.id = id;
        this.type = type;
        this.directions = directions;
    }
}