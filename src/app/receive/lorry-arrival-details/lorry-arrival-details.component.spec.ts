import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorryArrivalDetailsComponent } from './lorry-arrival-details.component';

describe('LorryArrivalDetailsComponent', () => {
  let component: LorryArrivalDetailsComponent;
  let fixture: ComponentFixture<LorryArrivalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LorryArrivalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorryArrivalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
