import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {

  usersArray: Array<User>;
  users: User[];

  constructor(
    public userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.data.subscribe((data) => {
      this.users = data['msg'];
    });
    // this.userService.getUsers().subscribe((data) => {
    //   this.usersArray = data;
    // })
    // this.users = this.userService.getUsers();

    // this.userService
    // .getUsers()
    // .mergeMap(res => res)
    // .filter((elem) =>   elem.username === 'Bret')
    // .subscribe(data => console.log(data)
    // );
  }


}
