import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MatMenuTrigger } from '@angular/material/menu';
import { SeguridadService } from '../seguridad/seguridad.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver , public seguridadService: SeguridadService) { }

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() sidenavClose = new EventEmitter();
  ngOnInit(): void {
  }

  abrirCerrar = true;
 

  toggle(algo): void{
     if (this.abrirCerrar){
      this.trigger.openMenu();
     }
     else{
     this.trigger.closeMenu();
     }
    this.abrirCerrar = !this.abrirCerrar;
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  public onToggleSidenav = () => { 
  }
}
