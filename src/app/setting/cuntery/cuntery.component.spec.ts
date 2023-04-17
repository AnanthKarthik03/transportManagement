import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CunteryComponent } from './cuntery.component';

describe('CunteryComponent', () => {
  let component: CunteryComponent;
  let fixture: ComponentFixture<CunteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CunteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CunteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
