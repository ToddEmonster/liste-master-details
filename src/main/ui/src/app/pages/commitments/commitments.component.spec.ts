import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentsComponent } from './commitments.component';

describe('TodosComponent', () => {
  let component: CommitmentsComponent;
  let fixture: ComponentFixture<CommitmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
