import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor() { }

  @Input() todos: any[];

  doneTodos: any[] = [];
  undoneTodos: any[] = [];

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
