import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMconeComponent } from './lazy-mcone.component';

describe('LazyMconeComponent', () => {
  let component: LazyMconeComponent;
  let fixture: ComponentFixture<LazyMconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyMconeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyMconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
