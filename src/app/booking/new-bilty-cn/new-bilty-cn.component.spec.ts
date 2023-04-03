import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBiltyCnComponent } from './new-bilty-cn.component';

describe('NewBiltyCnComponent', () => {
  let component: NewBiltyCnComponent;
  let fixture: ComponentFixture<NewBiltyCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBiltyCnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBiltyCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
