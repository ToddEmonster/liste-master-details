import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent implements OnInit {

  constructor() { }

  @Input() commitmentsCount = 0;
  @Output() getCommitmentsEvent = new EventEmitter();

  ngOnInit(): void {
  }

  getAllCommitments() {
    this.getCommitmentsEvent.emit('get all commitments');
  }

}
