import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTallaComponent } from './editar-talla.component';

describe('EditarTallaComponent', () => {
  let component: EditarTallaComponent;
  let fixture: ComponentFixture<EditarTallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
