import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonizeComponent } from './colonize.component';

describe('ColonizeComponent', () => {
  let component: ColonizeComponent;
  let fixture: ComponentFixture<ColonizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColonizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
