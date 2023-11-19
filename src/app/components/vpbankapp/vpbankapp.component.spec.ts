import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpbankappComponent } from './vpbankapp.component';

describe('VpbankappComponent', () => {
  let component: VpbankappComponent;
  let fixture: ComponentFixture<VpbankappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VpbankappComponent]
    });
    fixture = TestBed.createComponent(VpbankappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
