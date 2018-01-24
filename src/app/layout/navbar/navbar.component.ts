import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  router: Router;
  isLanding: boolean;
  isAdmin: boolean;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.isLanding = this.router.isActive('/', true);
        this.isAdmin = this.router.isActive('/admin', false);
      }
    });
  }
}
