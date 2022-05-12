import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceFlex2Component } from './marketplace-flex2.component';

describe('MarketplaceFlex2Component', () => {
  let component: MarketplaceFlex2Component;
  let fixture: ComponentFixture<MarketplaceFlex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceFlex2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceFlex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
