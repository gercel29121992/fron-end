import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { tallaCreacionDTO } from '../talla';
import { TallaService } from '../talla.service';

@Component({
  selector: 'app-crear-talla',
  templateUrl: './crear-talla.component.html',
  styleUrls: ['./crear-talla.component.css']
})
export class CrearTallaComponent implements OnInit {

  constructor(private router: Router, private tallaService: TallaService) { }

  ngOnInit(): void {
  }

  guardarCambios(talla: tallaCreacionDTO) {
    if(talla.nombre){

      this.tallaService.crear(talla).subscribe(
        () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'success!',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/talla']);
        }
      );

    }
    
  }

}
