import {Component, Input, OnInit} from "@angular/core";
import {AppService} from "./app.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: any;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    console.log("current todo:", this.todo);
  }
}