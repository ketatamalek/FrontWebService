import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNiveauxComponent } from './liste-niveaux.component';

describe('ListeNiveauxComponent', () => {
  let component: ListeNiveauxComponent;
  let fixture: ComponentFixture<ListeNiveauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeNiveauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNiveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
