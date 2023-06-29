import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator2Component } from './calculator2.component';

describe('Calculator2Component', () => {
  let component: Calculator2Component;
  let fixture: ComponentFixture<Calculator2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Calculator2Component]
    });
    fixture = TestBed.createComponent(Calculator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
