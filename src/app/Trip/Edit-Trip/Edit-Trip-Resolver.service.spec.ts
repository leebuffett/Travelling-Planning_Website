/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditTripResolverService } from './Edit-Trip-Resolver.service';

describe('Service: EditTripResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditTripResolverService]
    });
  });

  it('should ...', inject([EditTripResolverService], (service: EditTripResolverService) => {
    expect(service).toBeTruthy();
  }));
});
