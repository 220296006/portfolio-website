import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsTheebestprojectComponent } from './portfolio-details-theebestproject.component';

describe('PortfolioDetailsTheebestprojectComponent', () => {
  let component: PortfolioDetailsTheebestprojectComponent;
  let fixture: ComponentFixture<PortfolioDetailsTheebestprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioDetailsTheebestprojectComponent]
    });
    fixture = TestBed.createComponent(PortfolioDetailsTheebestprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
