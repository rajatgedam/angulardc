import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaviorDetailComponent } from './savior-detail.component';

describe('SaviorDetailComponent', () => {
  let component: SaviorDetailComponent;
  let fixture: ComponentFixture<SaviorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaviorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaviorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
