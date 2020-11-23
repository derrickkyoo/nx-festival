import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { formatRating } from '@nx-festival/store/util-formatters';
import { IGame } from '@nx-festival/util-interface';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'nx-festival-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  game$ = this.route.paramMap
    .pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap(id => this.http.get<IGame>(`api/games/${id}`))
    );

    formatRating = formatRating;
}
