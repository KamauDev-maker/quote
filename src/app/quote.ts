export class Quote {
   showInfo: boolean;
   constructor(public id: number,public name:string,public quote:string, public datePosted: Date){
       this.showInfo=false;
   }
}
