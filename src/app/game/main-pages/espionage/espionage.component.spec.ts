import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspionageComponent } from './espionage.component';

describe('EspionageComponent', () => {
  let component: EspionageComponent;
  let fixture: ComponentFixture<EspionageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspionageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspionageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
