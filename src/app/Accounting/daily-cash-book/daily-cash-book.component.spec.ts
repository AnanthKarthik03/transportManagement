import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCashBookComponent } from './daily-cash-book.component';

describe('DailyCashBookComponent', () => {
  let component: DailyCashBookComponent;
  let fixture: ComponentFixture<DailyCashBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCashBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCashBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
