import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerByAccountComponent } from './ledger-by-account.component';

describe('LedgerByAccountComponent', () => {
  let component: LedgerByAccountComponent;
  let fixture: ComponentFixture<LedgerByAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerByAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
