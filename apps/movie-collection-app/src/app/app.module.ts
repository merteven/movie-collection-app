import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@movie-collection/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('@movie-collection/collection').then(
            (m) => m.CollectionModule
          ),
      },
      {
        path: 'collections',
        loadChildren: () =>
          import('@movie-collection/collection').then(
            (m) => m.CollectionModule
          ),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('@movie-collection/auth').then((m) => m.AuthModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
