import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Savior } from '../savior';
import { SaviorService } from '../savior.service';

@Component({
  selector: 'app-savior-search',
  templateUrl: './savior-search.component.html',
  styleUrls: ['./savior-search.component.css']
})
export class SaviorSearchComponent implements OnInit {
  saviors$: Observable<Savior[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private saviorService: SaviorService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.saviors$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(200),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.saviorService.searchSaviors(term)),
    );
  }
}

