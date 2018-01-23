import { Component, OnInit } from '@angular/core';
import { UserService }       from '@app/features/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  constructor (
    private userService: UserService,
    )
  {}
  user: string;

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
