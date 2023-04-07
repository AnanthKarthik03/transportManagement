import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenifestCartComponent } from './menifest-cart.component';

describe('MenifestCartComponent', () => {
  let component: MenifestCartComponent;
  let fixture: ComponentFixture<MenifestCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenifestCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenifestCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
