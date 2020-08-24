export class Quote{
    showName: boolean;
    constructor(public author: string,public quote: string,public name: string){
        this.showName=false;
    }
}
