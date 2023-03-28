import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private appService: AppService) {}

  title = 'angular-nodejs-example';

  todoForm = new FormGroup({
    title: new FormControl('', Validators.nullValidator && Validators.required),
    description: new FormControl('', Validators.nullValidator),
  });

  todos: any[] = [];
  todoCount = 0;
  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.appService.addTodo(this.todoForm.value, this.todoCount + 1).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.todoCount = this.todoCount + 1;
      console.log(this.todoForm);
      this.todoForm.reset();
    });
  }

  getAllTodos() {
    this.appService.getTodos().pipe(takeUntil(this.destroy$)).subscribe((todos: any[]) => {
      this.todoCount = todos.length;
      this.todos = todos;
      console.log(this.todos);
    });
  }

  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
		this.userCount = users.length;
        this.users = users;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
	  //this.getAllUsers();
    this.getAllTodos();
  }
}
