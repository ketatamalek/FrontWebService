import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeTirageFormComponent } from './demande-tirage-form.component';

describe('DemandeTirageFormComponent', () => {
  let component: DemandeTirageFormComponent;
  let fixture: ComponentFixture<DemandeTirageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeTirageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeTirageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
