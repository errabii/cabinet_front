import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinfirmiereComponent } from './listinfirmiere.component';

describe('ListinfirmiereComponent', () => {
  let component: ListinfirmiereComponent;
  let fixture: ComponentFixture<ListinfirmiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListinfirmiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinfirmiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
