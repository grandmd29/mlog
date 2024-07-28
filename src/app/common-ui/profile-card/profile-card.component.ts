import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  name = 'alex';
  yourName: string = '';
  tooltip = 'Вам нужно ввести свое имя';
  send(mytext: string) {
    console.log('Тут твое имя', mytext);
  }
}
