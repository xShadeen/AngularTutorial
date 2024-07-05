import {Component} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component'
import {FormsModule} from '@angular/forms'
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeroesComponent, FormsModule, MessagesComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}