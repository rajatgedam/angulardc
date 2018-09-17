import { Component, OnInit, Input } from '@angular/core';
import { Savior } from '../savior'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SaviorService }  from '../savior.service';



@Component({
  selector: 'app-savior-detail',
  templateUrl: './savior-detail.component.html',
  styleUrls: ['./savior-detail.component.css']
})
export class SaviorDetailComponent implements OnInit {
  @Input() savior: Savior;

  
  constructor(
  private route: ActivatedRoute,
  private saviorService: SaviorService,
  private location: Location
  ) { }

  ngOnInit(): void {
    this.getSavior();
  }

  goBack(): void {
    this.location.back();
  }
  
  getSavior(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.saviorService.getSavior(id)
      .subscribe(savior => this.savior = savior);
      
  }
  save(): void {
   this.saviorService.updateSavior(this.savior)
     .subscribe(() => this.goBack());
 }

  
}

