import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranTableComponent } from './tran-table.component';

describe('TranTableComponent', () => {
  let component: TranTableComponent;
  let fixture: ComponentFixture<TranTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
