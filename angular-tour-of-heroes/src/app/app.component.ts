import {Component} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component'
import {FormsModule} from '@angular/forms'
import { MessagesComponent } from './messages/messages.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeroesComponent, FormsModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}