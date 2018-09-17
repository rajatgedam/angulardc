import { Component, OnInit } from '@angular/core';

import { Savior } from '../savior';
import { SaviorService } from '../savior.service';

@Component({
  selector: 'app-saviors',
  templateUrl: './saviors.component.html',
  styleUrls: ['./saviors.component.css']
})
export class SaviorsComponent implements OnInit {
  saviors: Savior[];

  constructor(private saviorService: SaviorService) { }

  ngOnInit() {
    this.getSavior();
  }

  getSavior(): void {
    this.saviorService.getSaviors()
    .subscribe(saviors => this.saviors = saviors);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.saviorService.addSavior({ name } as Savior)
      .subscribe(savior => {
        this.saviors.push(savior);
      });
  }

  delete(savior: Savior): void {
    this.saviors = this.saviors.filter(h => h !== savior);
    this.saviorService.deleteSavior(savior).subscribe();
  }

}