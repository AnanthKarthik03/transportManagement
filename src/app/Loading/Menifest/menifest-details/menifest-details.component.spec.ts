import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenifestDetailsComponent } from './menifest-details.component';

describe('MenifestDetailsComponent', () => {
  let component: MenifestDetailsComponent;
  let fixture: ComponentFixture<MenifestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenifestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenifestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
