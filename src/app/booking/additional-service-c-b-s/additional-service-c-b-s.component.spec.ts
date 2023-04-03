import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalServiceCBSComponent } from './additional-service-c-b-s.component';

describe('AdditionalServiceCBSComponent', () => {
  let component: AdditionalServiceCBSComponent;
  let fixture: ComponentFixture<AdditionalServiceCBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalServiceCBSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalServiceCBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
