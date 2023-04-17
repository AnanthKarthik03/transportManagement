import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyToBeBillComponent } from './monthly-to-be-bill.component';

describe('MonthlyToBeBillComponent', () => {
  let component: MonthlyToBeBillComponent;
  let fixture: ComponentFixture<MonthlyToBeBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyToBeBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyToBeBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
