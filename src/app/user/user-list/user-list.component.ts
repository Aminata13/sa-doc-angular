import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(public userSrv: UserService) { }

  ngOnInit() {
    this.userSrv.getToken();
    this.userSrv.getUsers().subscribe(data => {
      console.log(data);

      this.users = data;
    });
  }

}
