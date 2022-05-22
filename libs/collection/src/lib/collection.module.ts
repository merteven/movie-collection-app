import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DataAccessModule } from '@movie-collection/data-access';
import { CollectionTableComponent } from './components/collection-table/collection-table.component';
import { HomePageComponent } from './pages/home/home.page';
import { CreateCollectionPageComponent } from './pages/create-collection/create-collection.page';
import { CollectionCreateFormComponent } from './components/collection-create-form/collection-create-form.component';

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
      {
        path: 'create',
        pathMatch: 'full',
        component: CreateCollectionPageComponent,
      },
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [
    CollectionTableComponent,
    HomePageComponent,
    CreateCollectionPageComponent,
    CollectionCreateFormComponent,
  ],
})
export class CollectionModule {}
