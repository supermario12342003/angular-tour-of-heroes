import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  router: Router;
  isAdmin: boolean;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.isAdmin = this.router.isActive('/admin', false);
      }
    });
  }
}
