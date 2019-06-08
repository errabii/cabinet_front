import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaireformComponent } from './secretaireform.component';

describe('SecretaireformComponent', () => {
  let component: SecretaireformComponent;
  let fixture: ComponentFixture<SecretaireformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaireformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaireformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
