import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMcthreeComponent } from './lazy-mcthree.component';

describe('LazyMcthreeComponent', () => {
  let component: LazyMcthreeComponent;
  let fixture: ComponentFixture<LazyMcthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyMcthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyMcthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
