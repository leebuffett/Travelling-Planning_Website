/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditUserResolverService } from './Edit-User-Resolver.service';

describe('Service: EditUserResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditUserResolverService]
    });
  });

  it('should ...', inject([EditUserResolverService], (service: EditUserResolverService) => {
    expect(service).toBeTruthy();
  }));
});
