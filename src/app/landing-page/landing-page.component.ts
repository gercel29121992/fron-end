import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
      this.menbresia = [{
        titulo: 'clasica',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Library-Sites-CityClubSharedLib/default/dw1a4c84bb/Membresia/250123_LP_cityclub_Membresiaclasica_d.jpg?sw=510&sh=488&sm=fit'
      },
      {
        titulo: 'renovacion',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster: 'https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Library-Sites-CityClubSharedLib/default/dw1dbdbbd5/Membresia/250123_LP_cityclub_Renovacion_d.jpg?sw=510&sh=488&sm=fit'
      }];
  }
  menbresia;
  peliculasProximosEstrenos = [];

}
