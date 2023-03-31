import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnChanges {
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

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log("new todos :", this.todos);
    // Clean lists
    this.undoneTodos = [];
    this.doneTodos = [];

    // Refill lists
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
