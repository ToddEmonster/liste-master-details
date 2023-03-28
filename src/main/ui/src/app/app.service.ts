import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getTodos() {
    return this.http.get(this.rootURL + '/todos');
  }

  // TODO : create Todo entity class
  addTodo(todo: any, id: number) {
    todo.id = id;
    return this.http.post(this.rootURL + '/todo', todo);
  }

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any, id: number) {
	user.id = id;
	return this.http.post(this.rootURL + '/user', user);
  }


}
