import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceMainComponent } from './marketplace-main.component';

describe('MarketplaceMainComponent', () => {
  let component: MarketplaceMainComponent;
  let fixture: ComponentFixture<MarketplaceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
