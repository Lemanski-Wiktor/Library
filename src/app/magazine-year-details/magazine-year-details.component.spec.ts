import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineYearDetailsComponent } from './magazine-year-details.component';

describe('MagazineYearDetailsComponent', () => {
  let component: MagazineYearDetailsComponent;
  let fixture: ComponentFixture<MagazineYearDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineYearDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazineYearDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
