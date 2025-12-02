import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_DATA_USERS } from './dummy-data-user';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
  users = DUMMY_DATA_USERS;
  selectedUserTask?: string;

  
   onSelectUser(id: string) {
      this.selectedUserTask= id;
  }
  getSelectedUserTask() {
     return this.users.find(user => user.id === this.selectedUserTask)!;
          }
  
 
}
