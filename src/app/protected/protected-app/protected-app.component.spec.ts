import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedAppComponent } from './protected-app.component';

describe('ProtectedAppComponent', () => {
  let component: ProtectedAppComponent;
  let fixture: ComponentFixture<ProtectedAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
