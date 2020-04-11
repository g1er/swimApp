import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimResultComponent } from './swim-result.component';

describe('SwimResultComponent', () => {
  let component: SwimResultComponent;
  let fixture: ComponentFixture<SwimResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
