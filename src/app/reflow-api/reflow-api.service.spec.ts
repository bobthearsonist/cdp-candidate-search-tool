import { TestBed, inject } from '@angular/core/testing';

import { ReflowApiService } from './reflow-api.service';

describe('ReflowApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReflowApiService]
    });
  });

  it('should ...', inject([ReflowApiService], (service: ReflowApiService) => {
    expect(service).toBeTruthy();
  }));
});
