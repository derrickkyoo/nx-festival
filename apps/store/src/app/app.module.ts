import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreUiSharedModule } from '@nx-festival/store/ui-shared';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id',
          loadChildren: () =>
            import('@nx-festival/store/feature-game-detail').then(
              (module) => module.StoreFeatureGameDetailModule
            ),
        },
      ]
    ),
    StoreUiSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
