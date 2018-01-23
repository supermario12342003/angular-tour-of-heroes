import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUser() {
    return "dummy user";
  }
}
