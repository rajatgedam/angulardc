import { Component, OnInit } from '@angular/core';
import { Savior } from '../savior';
import { SaviorService } from '../savior.service';
//import { SaviorSearchComponent } from '../savior-search/savior-search.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  
  // directives: [SaviorSearchComponent]
})


export class DashboardComponent implements OnInit {
  saviors: Savior[] = [];

  constructor(private saviorService: SaviorService) { }

  ngOnInit() {
    this.getSaviors();
  }

  getSaviors(): void {
    this.saviorService.getSaviors()
      .subscribe(saviors => this.saviors = saviors.slice(1, 5));
  }
}