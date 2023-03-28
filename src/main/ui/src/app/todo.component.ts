import {Component, Input, OnInit} from "@angular/core";
import {AppService} from "./app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: any = null;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  goBackToMain() {
    this.router.navigate(["/"]);
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log("current id:", this.id);
    console.log("current todo:", this.todo);
  }
}