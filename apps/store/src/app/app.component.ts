import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { formatRating } from '@nx-festival/store/util-formatters';

@Component({
  selector: 'nx-festival-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'store';
  formatRating = formatRating;
  games = this.http.get<any>('/api/games');
}
