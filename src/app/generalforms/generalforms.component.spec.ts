import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralformsComponent } from './generalforms.component';

describe('GeneralformsComponent', () => {
  let component: GeneralformsComponent;
  let fixture: ComponentFixture<GeneralformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
