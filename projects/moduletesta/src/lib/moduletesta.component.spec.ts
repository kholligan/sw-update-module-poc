import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuletestaComponent } from './moduletesta.component';

describe('ModuletestaComponent', () => {
  let component: ModuletestaComponent;
  let fixture: ComponentFixture<ModuletestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuletestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuletestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
