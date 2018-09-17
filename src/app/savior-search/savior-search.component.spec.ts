import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaviorSearchComponent } from './savior-search.component';

describe('SaviorSearchComponent', () => {
  let component: SaviorSearchComponent;
  let fixture: ComponentFixture<SaviorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaviorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaviorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
