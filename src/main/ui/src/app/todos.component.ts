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

  updateSatus(todoId: number, newStatus: boolean) {
    console.log("update status:", todoId, "to:", newStatus);
    this.appService.updateTodo(todoId, newStatus).subscribe(res => {});;
    // Remove from previous list
    // Add to new list
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
