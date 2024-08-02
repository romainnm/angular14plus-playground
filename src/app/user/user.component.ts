import { Component, signal, computed, input, Input } from '@angular/core';
import { MOCK_USERS } from '../../mocks/users.mock';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// ================================== ANGULAR 14+ - START ==================================== // 
  // 1. RANDOMIZE USER - Signal syntax
/*   users14 = signal(MOCK_USERS[this.getRandomIndex]);
  userAvatar14 = computed(() => 'assets/users/' + this.users14().avatar);
  onSelectUser14() {
    this.users14.set(MOCK_USERS[this.getRandomIndex]);
  } */
  // 2. Get entire user list with Input/Output: - Signal syntax
/*   avatarIO14 = input.required<string>(); // Read Only
  userNameIO14 = input.required<string>(); // Read Only
  userAvatarIO14 = computed(() => 'assets/users/' + this.avatarIO14()); */
// ================================== ANGULAR 14+ - END ==================================== // 

// ================================== ANGULAR < 13 - START ==================================== // 
   //1. RANDOMIZE USER Property Binding + String Interpolation 
    // users13 = MOCK_USERS[this.getRandomIndex];
    // get userAvatar13() {
    //   return 'assets/users/' + this.users13.avatar;
    // }

    // onSelectUser() {
    //   this.users13 = MOCK_USERS[this.getRandomIndex];
    // }

  
    // 2. Get entire user list with Input/Output
    @Input({ required: true }) avatarIO13!: string;
    @Input({ required: true }) userNameIO13!: string;

    get userAvatarIO13() {
      return 'assets/users/' + this.avatarIO13;
    }
 
    onSelectUser() {
      console.log('user selected!')
    }
// ================================== ANGULAR < 13 - END ==================================== // 
    
  // private get getRandomIndex() {
  //   return Math.floor(Math.random() * MOCK_USERS.length);
  // }
}
