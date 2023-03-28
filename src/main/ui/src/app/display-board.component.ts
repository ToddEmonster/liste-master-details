import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent implements OnInit {

  constructor() { }

  @Input() todosCount = 0;
  @Output() getTodosEvent = new EventEmitter();

  ngOnInit(): void {
  }

  getAllTodos() {
    this.getTodosEvent.emit('get all todos');
  }

}
