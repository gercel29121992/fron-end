import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTallaComponent } from './formulario-talla.component';

describe('FormularioTallaComponent', () => {
  let component: FormularioTallaComponent;
  let fixture: ComponentFixture<FormularioTallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
