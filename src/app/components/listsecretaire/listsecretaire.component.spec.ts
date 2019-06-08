import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsecretaireComponent } from './listsecretaire.component';

describe('ListsecretaireComponent', () => {
  let component: ListsecretaireComponent;
  let fixture: ComponentFixture<ListsecretaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsecretaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
