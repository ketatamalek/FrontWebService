import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandesTirageComponent } from './liste-demandes-tirage.component';

describe('ListeDemandesTirageComponent', () => {
  let component: ListeDemandesTirageComponent;
  let fixture: ComponentFixture<ListeDemandesTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandesTirageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandesTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
