import { Component, OnInit, Input } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(private appService: AppService) { }

  @Input() todos: any[];

  doneTodos: any[] = [];
  undoneTodos: any[] = [];

  updateSatus(updatedTodo: any, newStatus: boolean) {
    this.appService.updateTodo(updatedTodo.id, newStatus).subscribe(res => {});
    updatedTodo.done = newStatus;

    // Change list display
    if (newStatus) {
      this.undoneTodos = this.undoneTodos.filter(td => td.id != updatedTodo.id);
      this.doneTodos.unshift(updatedTodo);
    } else {
      this.doneTodos = this.doneTodos.filter(td => td.id != updatedTodo.id);
      this.undoneTodos.unshift(updatedTodo);
    }
  }

  ngOnInit(): void {
    if (this.todos.length > 0) {
      this.todos.forEach(todo => {
        if (todo.done) {
          this.doneTodos.push(todo);
        } else {
          this.undoneTodos.push(todo);
        }
      })
    }
  }

}
