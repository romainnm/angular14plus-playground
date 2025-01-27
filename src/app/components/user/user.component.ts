import { Component, signal, computed, input, Input, output, Output, EventEmitter, OnInit } from '@angular/core';
import { MOCK_USERS } from '../../../mocks/users.mock';
import { IUser } from '../../interfaces/user.interface';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

// ================================== ANGULAR 14+ - START ==================================== // 

// 1. RANDOMIZE USER - Signal syntax
/*   users = signal(MOCK_USERS[this.getRandomIndex]);
  userAvatar = computed(() => 'assets/users/' + this.users().avatar);
  onSelectUser() {
    this.users.set(MOCK_USERS[this.getRandomIndex]);
  } */
// 2. Get entire user list with Input/Output: - Signal syntax
  // avatar = input.required<string>(); // Read Only
  // userName = input.required<string>(); // Read Only
  // userId = input.required<string>(); // Read Only

  user = input.required<IUser>(); // Read Only
  
  avatarPath = computed(() => 'assets/users/' + this.user().avatar);
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
// ================================== ANGULAR 14+ - END ==================================== // 


// ================================== ANGULAR 13- - START ==================================== // 
//1. RANDOMIZE USER Property Binding + String Interpolation 
    // users = MOCK_USERS[this.getRandomIndex];
    // get userAvatar() {
    //   return 'assets/users/' + this.users.avatar;
    // }

    // onSelectUser() {
    //   this.users = MOCK_USERS[this.getRandomIndex];
    // }

  
// 2. Get entire user list with Input/Output
    // @Input({ required: true }) avatar!: string;
    // @Input({ required: true }) userName!: string;
    // @Input({ required: true }) userId!: string;

    // @Input({ required: true }) user!: IUser;
    // @Output() select = new EventEmitter<string>();
 
    // get avatarPath() {
    //   return 'assets/users/' + this.user.avatar;
    // }
 
    // onSelectUser() {
    //   this.select.emit(this.user.id);
    // }
// ================================== ANGULAR 13- - END ==================================== // 
    
  // private get getRandomIndex() {
  //   return Math.floor(Math.random() * MOCK_USERS.length);
  // }
}
