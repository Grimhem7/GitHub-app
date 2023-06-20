import { User } from "./user";

export class Repository {
   
    total_count!:number;
    items: any []= [];
    owner:User[]= [];
    created_at!:Date;
    updated_at!:Date;
    description:string='';
    stargazers_count:number=0;
    open_issues_count:number =0;
    incomplete_results:boolean = false;
}


