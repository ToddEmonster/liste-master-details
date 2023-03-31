import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-commitment',
  templateUrl: './commitment.component.html',
  styleUrls: ['./commitment.component.css']
})
export class CommitmentComponent implements OnInit {
  id: number;
  commitment: any = null;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  goBackToMain() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log('current id:', this.id);
    this.appService.getCommitment(this.id).subscribe((commitment: any) => {
      this.commitment = commitment;
      console.log('current todo:', this.commitment);
    });
  }
}
