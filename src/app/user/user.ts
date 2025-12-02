import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_DATA_USERS } from '../dummy-data-user';
import { User as UserModel } from '../models/user';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserModel;
  @Output() select = new EventEmitter();
  users = DUMMY_DATA_USERS;

  get imagePath() {
    return `/assets/users/${this.users.find((user) => user.id === this.user.id)?.avatar}`;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
