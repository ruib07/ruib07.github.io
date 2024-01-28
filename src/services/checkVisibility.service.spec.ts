/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckVisibilityService } from './checkVisibility.service';

describe('Service: CheckVisibility', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckVisibilityService]
    });
  });

  it('should ...', inject([CheckVisibilityService], (service: CheckVisibilityService) => {
    expect(service).toBeTruthy();
  }));
});
