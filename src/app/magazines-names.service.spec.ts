import { TestBed } from '@angular/core/testing';

import { MagazinesNamesService } from './magazines-names.service';

describe('MagazinesNamesService', () => {
  let service: MagazinesNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagazinesNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
