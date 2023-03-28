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

  /**
   * Do not forget to SUBSCRIBE to the method, otherwise no request will be sent.
   * @param todoId
   * @param newStatus
   */
  updateTodo(todoId: number, newStatus: boolean) {
    return this.http.put(this.rootURL + '/' + todoId, newStatus);
  }

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any, id: number) {
	user.id = id;
	return this.http.post(this.rootURL + '/user', user);
  }


}
