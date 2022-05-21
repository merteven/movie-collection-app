import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BASE_URL,
  DataAccessModule,
  JWT_TOKEN,
} from '@movie-collection/data-access';

@NgModule({
  imports: [CommonModule, DataAccessModule],
  providers: [
    { provide: BASE_URL, useValue: 'http://localhost:8080/api' },
    { provide: JWT_TOKEN, useValue: '123123123123' },
  ],
})
export class CoreModule {}
