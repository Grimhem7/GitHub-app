import { Repository } from '../Class/repository';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { User } from '../Class/user';


@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  
  
  constructor(private http:HttpClient) { }

  private Repo_URL= "https://api.github.com/search/repositories?q=created:>2023-05-28&sort=stars&order=desc&page="

  public getRepos(page:number): Observable<{items:Repository[]}>{

    return this.http.get<{items:Repository[]}>(this.Repo_URL + page);
  }

  public getReposAll(page:number): Observable<Repository[]>{

    return this.http.get<Repository[]>(this.Repo_URL + page);
  }
}
