import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgResolverService implements Resolve<User[]> {

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<User[]> {
    console.log("resolver");    
    return this.userService.getUsers();
  }


  constructor(private userService: UserService) { }
}
