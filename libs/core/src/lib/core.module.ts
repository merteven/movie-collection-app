import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BASE_URL, DataAccessModule } from '@movie-collection/data-access';
import { AuthHeaderInterceptor } from './interceptors/AuthHeaderInterceptor';

@NgModule({
  imports: [CommonModule, DataAccessModule],
  providers: [
    { provide: BASE_URL, useValue: 'http://localhost:8080/api' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
