import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceFlex1Component } from './marketplace-flex1.component';

describe('MarketplaceFlex1Component', () => {
  let component: MarketplaceFlex1Component;
  let fixture: ComponentFixture<MarketplaceFlex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceFlex1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceFlex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
