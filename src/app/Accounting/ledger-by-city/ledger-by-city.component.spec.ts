import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerByCityComponent } from './ledger-by-city.component';

describe('LedgerByCityComponent', () => {
  let component: LedgerByCityComponent;
  let fixture: ComponentFixture<LedgerByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerByCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
