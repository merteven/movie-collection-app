import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DataAccessModule } from '@movie-collection/data-access';
import { CollectionTableComponent } from './components/collection-table/collection-table.component';
import { HomePageComponent } from './pages/home/home.page';
import { CreateCollectionPageComponent } from './pages/create-collection/create-collection.page';
import { CollectionCreateFormComponent } from './components/collection-create-form/collection-create-form.component';
import { CollectionItemListComponent } from './components/collection-item-list/collection-item-list.component';
import { CollectionPageComponent } from './pages/collection/collection.page';
import { CollectionItemCreateFormComponent } from './components/collection-item-create-form/collection-item-create-form.component';
import { CreateCollectionItemPageComponent } from './pages/create-collection-item-page-component/create-collection-item.page';

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
      {
        path: ':id',
        pathMatch: 'full',
        component: CollectionPageComponent,
      },
      {
        path: ':id/items/create',
        pathMatch: 'full',
        component: CreateCollectionItemPageComponent,
      },
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
    MatAutocompleteModule,
  ],
  declarations: [
    CollectionTableComponent,
    HomePageComponent,
    CreateCollectionPageComponent,
    CollectionCreateFormComponent,
    CollectionItemListComponent,
    CollectionPageComponent,
    CollectionItemCreateFormComponent,
    CreateCollectionItemPageComponent,
  ],
})
export class CollectionModule {}
