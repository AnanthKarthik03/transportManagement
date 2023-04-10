import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigmentArrivelListComponent } from './consigment-arrivel-list.component';

describe('ConsigmentArrivelListComponent', () => {
  let component: ConsigmentArrivelListComponent;
  let fixture: ComponentFixture<ConsigmentArrivelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigmentArrivelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigmentArrivelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
