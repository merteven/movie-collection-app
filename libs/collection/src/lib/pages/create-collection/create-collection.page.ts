import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'mc-create-collection',
  templateUrl: './create-collection.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCollectionPageComponent {
  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) {}

  onSubmit({ name }: { name: string }) {
    this.collectionService.create(name).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
