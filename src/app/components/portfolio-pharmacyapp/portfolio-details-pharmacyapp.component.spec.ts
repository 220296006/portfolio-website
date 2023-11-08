import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsPharmacyappComponent } from './portfolio-details-pharmacyapp.component';

describe('PortfolioDetailsPharmacyappComponent', () => {
  let component: PortfolioDetailsPharmacyappComponent;
  let fixture: ComponentFixture<PortfolioDetailsPharmacyappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioDetailsPharmacyappComponent]
    });
    fixture = TestBed.createComponent(PortfolioDetailsPharmacyappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
