export class Quote {
   showInfo: boolean;
   constructor(public id: number,public name:string,public quote:string,public author:string, public completeDate:Date ,public datePosted: Date){
       this.showInfo=false;
   }
}
