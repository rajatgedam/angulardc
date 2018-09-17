import { TestBed, inject } from '@angular/core/testing';

import { SaviorService } from './savior.service';

describe('SaviorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaviorService]
    });
  });

  it('should be created', inject([SaviorService], (service: SaviorService) => {
    expect(service).toBeTruthy();
  }));
});
