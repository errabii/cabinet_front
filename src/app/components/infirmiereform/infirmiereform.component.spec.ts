import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereformComponent } from './infirmiereform.component';

describe('InfirmiereformComponent', () => {
  let component: InfirmiereformComponent;
  let fixture: ComponentFixture<InfirmiereformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfirmiereformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
