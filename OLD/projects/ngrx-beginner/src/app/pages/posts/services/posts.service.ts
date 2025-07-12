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

  create(post: Post): Observable<Post>{
    return this.http.post<Post>(this.url,post)
  }

  delete(post: Post): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${post.id}`)
  }

  put(post: Post): Observable<Post>{
    return this.http.put<Post>(`${this.url}/${post.id}`,post)
  }

}
