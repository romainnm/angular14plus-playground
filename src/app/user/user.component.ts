import { Component, signal, computed } from '@angular/core';
import { MOCK_USERS } from '../../mocks/users.mock';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Signal syntax: Angular 14+
  users = signal(MOCK_USERS[this.getRandomIndex]);
  userAvatar = computed(() => 'assets/users/' + this.users().avatar);

  onSelectUser() {
    this.users.set(MOCK_USERS[this.getRandomIndex]);
  }

  private get getRandomIndex() {
    return Math.floor(Math.random() * MOCK_USERS.length);
  }

  /* Property Binding + String Interpolation : Angular < 13 
    users = MOCK_USERS[this.getRandomIndex];

    get userAvatar() {
      return 'assets/users/' + this.users.avatar;
    }

    onSelectUser() {
      this.users = MOCK_USERS[this.getRandomIndex];
    }
  */
}
