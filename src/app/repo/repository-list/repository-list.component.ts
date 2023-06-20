import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { RepoServiceService } from 'src/app/service/repo-service.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
 
  data:any;
  
  errorMessage!: string;
  login:string='';
  // pagination: 
  subscribe!: Subscription;
  loading=true;
  page:number=1;
  count:number=0;
  constructor(private repoService:RepoServiceService){}
  ngOnInit(): void {
    this.getAllRepository();
    
    
  }

  getAllRepository() {
     this.loading = true;
     this.subscribe= this.repoService.getRepos(this.page).subscribe({
      next: (res)=> {
        //this.repoService.getReposAll(this.page).subscribe((nex:any) => this.count= nex.total_count);
        this.count = 100;
        console.log(this.count);
       this.loading = false;
       if (res && res.items && res.items.length>0){

        this.data=res.items;
        
        this.data = this.data.concat(res.items);
        
       }
        
        
        
         

      },
      error: err => console.error(err),
      complete: ()=> "Message ok"
  
    })

      
  }
 

   onTableDataChange(event:any){
    
     this.page = event;
     this.getAllRepository();

   }
  onDestroy(){
    this.subscribe.unsubscribe();
  }
}
