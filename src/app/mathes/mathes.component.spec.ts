import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathesComponent } from './mathes.component';

describe('MathesComponent', () => {
  let component: MathesComponent;
  let fixture: ComponentFixture<MathesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
