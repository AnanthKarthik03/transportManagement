import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatePassRegisterComponent } from './gate-pass-register.component';

describe('GatePassRegisterComponent', () => {
  let component: GatePassRegisterComponent;
  let fixture: ComponentFixture<GatePassRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatePassRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatePassRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
