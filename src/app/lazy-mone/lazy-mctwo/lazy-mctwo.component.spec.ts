import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMctwoComponent } from './lazy-mctwo.component';

describe('LazyMctwoComponent', () => {
  let component: LazyMctwoComponent;
  let fixture: ComponentFixture<LazyMctwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyMctwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyMctwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
