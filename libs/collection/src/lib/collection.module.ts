import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DataAccessModule } from '@movie-collection/data-access';
import { CollectionTableComponent } from './components/collection-table/collection-table.component';

@NgModule({
  imports: [
    CommonModule,
    DataAccessModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [CollectionTableComponent],
})
export class CollectionModule {}
