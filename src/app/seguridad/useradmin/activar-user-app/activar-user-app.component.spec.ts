import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarUserAppComponent } from './activar-user-app.component';

describe('ActivarUserAppComponent', () => {
  let component: ActivarUserAppComponent;
  let fixture: ComponentFixture<ActivarUserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivarUserAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarUserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
