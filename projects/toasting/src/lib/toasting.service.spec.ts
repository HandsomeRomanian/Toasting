import { TestBed } from '@angular/core/testing';

import { ToastingService } from './toasting.service';

describe('ToastingService', () => {
  let service: ToastingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
