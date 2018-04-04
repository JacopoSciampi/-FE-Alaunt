import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBuildComponent } from './single-build.component';

describe('SingleBuildComponent', () => {
  let component: SingleBuildComponent;
  let fixture: ComponentFixture<SingleBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
