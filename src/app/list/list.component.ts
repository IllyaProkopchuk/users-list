import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  usersList: Array<any> = [];

  constructor(
    public usersService: UsersServiceService
  ) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsers();
  }



}
