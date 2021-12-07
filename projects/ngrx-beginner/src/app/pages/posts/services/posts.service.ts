import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from '../model/post.model';

@Injectable({providedIn:'root'})
export class PostsService {

  url = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url)
  }


}
