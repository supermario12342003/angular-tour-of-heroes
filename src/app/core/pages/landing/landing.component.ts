import { Component, OnInit } from '@angular/core';
import { UserService }       from '@app/features/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor (
    private userService: UserService,
    )
  {}
  user: string;

  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}

