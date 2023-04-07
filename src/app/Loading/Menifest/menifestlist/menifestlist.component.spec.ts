import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenifestlistComponent } from './menifestlist.component';

describe('MenifestlistComponent', () => {
  let component: MenifestlistComponent;
  let fixture: ComponentFixture<MenifestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenifestlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenifestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
