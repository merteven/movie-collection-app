import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DataAccessModule } from '@movie-collection/data-access';
import { CollectionTableComponent } from './components/collection-table/collection-table.component';
import { HomePageComponent } from './pages/home/home.page';

@NgModule({
  imports: [
    CommonModule,
    DataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
      },
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [CollectionTableComponent, HomePageComponent],
})
export class CollectionModule {}
