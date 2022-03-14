import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubsTableComponent } from './customer-subs-table.component';

describe('CustomerSubsTableComponent', () => {
  let component: CustomerSubsTableComponent;
  let fixture: ComponentFixture<CustomerSubsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSubsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSubsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
