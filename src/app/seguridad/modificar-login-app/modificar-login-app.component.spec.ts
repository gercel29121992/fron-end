import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLoginAppComponent } from './modificar-login-app.component';

describe('ModificarLoginAppComponent', () => {
  let component: ModificarLoginAppComponent;
  let fixture: ComponentFixture<ModificarLoginAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarLoginAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLoginAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
