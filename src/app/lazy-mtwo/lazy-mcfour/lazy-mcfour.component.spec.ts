import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMcfourComponent } from './lazy-mcfour.component';

describe('LazyMcfourComponent', () => {
  let component: LazyMcfourComponent;
  let fixture: ComponentFixture<LazyMcfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyMcfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyMcfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
