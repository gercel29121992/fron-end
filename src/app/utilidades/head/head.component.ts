import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  isSmallScreen=true;
  constructor(private breakpointObserver: BreakpointObserver , public seguridadService: SeguridadService) { }
 
  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();

  }
  logout(){
    this.seguridadService.logout();
    return;
  }
}
