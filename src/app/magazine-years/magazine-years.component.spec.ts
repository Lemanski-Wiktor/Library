import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineYearsComponent } from './magazine-years.component';

describe('MagazineYearsComponent', () => {
  let component: MagazineYearsComponent;
  let fixture: ComponentFixture<MagazineYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineYearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazineYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
