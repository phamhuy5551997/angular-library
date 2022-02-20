import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomatButtonLibComponent } from './fomat-button-lib.component';

describe('FomatButtonLibComponent', () => {
  let component: FomatButtonLibComponent;
  let fixture: ComponentFixture<FomatButtonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomatButtonLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomatButtonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
