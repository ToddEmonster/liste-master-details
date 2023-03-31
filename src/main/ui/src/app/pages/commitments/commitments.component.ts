import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-commitments',
  templateUrl: './commitments.component.html',
  styleUrls: ['./commitments.component.css']
})
export class CommitmentsComponent implements OnInit, OnChanges {
  constructor(private appService: AppService) { }

  @Input() commitments: any[];

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log('new todos :', this.commitments);
  }

}
