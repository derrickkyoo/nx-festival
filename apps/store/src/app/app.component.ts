import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';

@Component({
  selector: 'nx-festival-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
  games = getAllGames();
}
