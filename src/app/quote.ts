export class Quote {
   showInfo: boolean;
  completeDate: Date;
   constructor(public id: number,public name:string,public quote:string,public author:string,public datePosted: Date,public likes:number,public dislikes:number){
       this.showInfo=false;
   }
}
