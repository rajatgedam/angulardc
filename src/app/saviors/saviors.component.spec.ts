import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaviorsComponent } from './saviors.component';

describe('SaviorsComponent', () => {
  let component: SaviorsComponent;
  let fixture: ComponentFixture<SaviorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaviorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaviorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
