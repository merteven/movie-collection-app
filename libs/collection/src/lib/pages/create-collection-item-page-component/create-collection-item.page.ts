import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionItem } from '../../models';
import { CollectionItemService } from '../../services/collection-item.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'mc-create-collection-item-page-component',
  templateUrl: './create-collection-item.page.html',
})
export class CreateCollectionItemPageComponent implements OnInit, OnDestroy {
  constructor(
    private movieService: MovieService,
    private collectionItemService: CollectionItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private subscription = new Subscription();
  options: CollectionItem[] = [];
  private collectionId: number | null = null;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = Number.parseInt(params['id']);
      if (Number.isNaN(id)) {
        throw new Error('Invalid collection id');
      }
      this.collectionId = id;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onInputChanged($event: string) {
    this.subscription.add(
      this.movieService.search($event).subscribe((options) => {
        this.options = options;
      })
    );
  }

  onSubmitted($event: number) {
    if (this.collectionId) {
      this.subscription.add(
        this.collectionItemService
          .create(this.collectionId, $event)
          .subscribe(() => {
            this.router.navigateByUrl(`/collections/${this.collectionId}`);
          })
      );
    }
  }
}
