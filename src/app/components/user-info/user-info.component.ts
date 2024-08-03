import { Component, Input, input } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-info',
  standalone: true,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
// ================================== ANGULAR 14+ - START ==================================== //
  userInfo = input.required<string>();
// ================================== ANGULAR 14+ - END ==================================== //

// ================================== ANGULAR 13- - START ==================================== // 
  // @Input() userInfo: string | undefined;
  // Alt: @Input() userInfo?: string;
// ================================== ANGULAR 13- - END ==================================== // 
}
