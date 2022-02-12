import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGridboxComponent } from './dashboard-gridbox.component';

describe('DashboardGridboxComponent', () => {
  let component: DashboardGridboxComponent;
  let fixture: ComponentFixture<DashboardGridboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGridboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGridboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
