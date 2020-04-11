import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwmStartListComponent } from './swm-start-list.component';

describe('SwmStartListComponent', () => {
  let component: SwmStartListComponent;
  let fixture: ComponentFixture<SwmStartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwmStartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwmStartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
