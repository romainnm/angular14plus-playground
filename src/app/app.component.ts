import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { MOCK_USERS } from '../mocks/users.mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = MOCK_USERS;

  onSelectUser(userId: string) {
    console.log(`User id  is ${userId}`);
  }
}


/* Angular 13 Config - app.module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, etc],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } */