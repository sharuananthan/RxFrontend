import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcsriptionDetailsComponent } from './subcsription-details.component';

describe('SubcsriptionDetailsComponent', () => {
  let component: SubcsriptionDetailsComponent;
  let fixture: ComponentFixture<SubcsriptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcsriptionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcsriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
