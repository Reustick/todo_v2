import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Todo} from 'src/app/interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
    
    async get(user_id:number): Promise<Todo[]> {
            let url =  `https://jsonplaceholder.typicode.com/users/${user_id}/todos`;
            const response = await this.http.get<any>(url).toPromise();
            return response.map((item)=>{
              return {
                ...item,
                completed: false
              };
            });
        }
    
    
    
  constructor(public readonly http: HttpClient) { }

}