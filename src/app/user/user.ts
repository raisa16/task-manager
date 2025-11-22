import { Component } from '@angular/core';
import { DUMMY_DATA_USERS } from '../dummy-data-user';

const randomIndex = Math.floor(Math.random() * DUMMY_DATA_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 selectedUser = DUMMY_DATA_USERS[randomIndex];
 
 get imagePath(){
    return `/assets/users/${this.selectedUser.avatar}`
}
 } 
