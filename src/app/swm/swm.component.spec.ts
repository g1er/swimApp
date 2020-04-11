import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwmComponent } from './swm.component';

describe('SwmComponent', () => {
  let component: SwmComponent;
  let fixture: ComponentFixture<SwmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
