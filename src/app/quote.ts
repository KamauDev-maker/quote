export class Quote {
   showInfo: boolean;
   constructor(public id: number,public name:string,public quote:string,public author:string, public completeDate:Date ,public datePosted: Date,public likes:number,public dislikes:number){
       this.showInfo=false;
   }
}
