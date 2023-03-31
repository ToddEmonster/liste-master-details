import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService) {}

  title = 'angular-nodejs-example';

  commitmentForm = new FormGroup({
    title: new FormControl('', Validators.nullValidator && Validators.required),
    description: new FormControl('', Validators.nullValidator),
  });

  commitments: any[] = [];
  commitmentsCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.appService.addCommitment(this.commitmentForm.value, this.commitmentsCount + 1).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.commitmentsCount = this.commitmentsCount + 1;
      console.log(this.commitmentForm);
      this.commitmentForm.reset();
    });
  }

  getAllTodos() {
    this.appService.getCommitments().pipe(takeUntil(this.destroy$)).subscribe((todos: any[]) => {
      this.commitmentsCount = todos.length;
      this.commitments = todos;
      console.log(this.commitments);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.getAllTodos();
  }
}
