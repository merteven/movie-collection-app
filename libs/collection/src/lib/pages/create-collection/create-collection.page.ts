import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'mc-create-collection',
  templateUrl: './create-collection.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCollectionPageComponent implements OnDestroy {
  private subscription = new Subscription();
  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit({ name }: { name: string }) {
    this.subscription.add(
      this.collectionService.create(name).subscribe(() => {
        this.router.navigateByUrl('/');
      })
    );
  }
}
