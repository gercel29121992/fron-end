import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})

export class UserProfilePageComponent implements OnInit {

  //Variable Declaration
  currentPage: string = "About"
  name = '';
  mail = '';
  role = '';
  cargo = '';
  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.mail = localStorage.getItem('mail');
    this.role = localStorage.getItem('role');
    this.cargo = localStorage.getItem('cargo');
  }

  showPage(page: string) {
    this.currentPage = page;

  }
}
