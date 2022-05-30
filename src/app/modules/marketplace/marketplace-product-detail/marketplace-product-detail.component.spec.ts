import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceProductDetailComponent } from './marketplace-product-detail.component';

describe('MarketplaceProductDetailComponent', () => {
  let component: MarketplaceProductDetailComponent;
  let fixture: ComponentFixture<MarketplaceProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
