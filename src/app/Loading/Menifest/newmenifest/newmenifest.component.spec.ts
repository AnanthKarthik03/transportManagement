import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmenifestComponent } from './newmenifest.component';

describe('NewmenifestComponent', () => {
  let component: NewmenifestComponent;
  let fixture: ComponentFixture<NewmenifestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmenifestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmenifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
