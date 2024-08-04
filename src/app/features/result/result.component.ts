import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, EMPTY, map, startWith, tap } from 'rxjs';
import { ResultService } from '../../shared/services';
import { category, products } from '../../shared/interfaces/carservise';
import { CreatComponent, DisplayComponent } from '../../shared/ui';
import { FormsModule, NgForm } from '@angular/forms';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { DisplaysComponent } from '../../shared/ui/displays/displays.component';

import { EpisodPipe } from '../../shared/pipe';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CreatComponent,
    DisplayComponent,
    NgFor,
    RouterOutlet,
    DisplaysComponent,
    FormsModule,
    RouterLink,
    AsyncPipe,
    EpisodPipe,
    NgClass,
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export default class ResultComponent implements OnInit {
  private readonly https = inject(HttpClient);
  private readonly http = inject(ResultService);

  readonly massive: category[] = [];
  readonly sasiv: products[] = [];

  readonly masive = [
    { name: 'selfcare', mas: ['Beauty', 'Fragrances', 'Skin Care'] },
    {
      name: 'furniture',
      mas: ['Furniture', 'Home Decoration', 'Kitchen Accessories'],
    },
    { name: 'magazine', mas: ['Groceries', 'Tablets'] },
    { name: 'Technic', mas: ['Laptops', 'Mobile Accessories', 'Smartphones'] },
    { name: 'Men', mas: ['Mens Shirts', 'Mens Watches', 'Mens Shoes'] },
    { name: 'transport', mas: ['Motorcycle', 'Vehicle'] },
    { name: 'accessories', mas: ['Sunglasses', 'Tops', 'Sports Accessories'] },
    {
      name: 'Women',
      mas: [
        'Womens Bags',
        'Womens Dresses',
        'Womens Jewellery',
        'Womens Shoes',
        'Womens Watches',
      ],
    },
  ];

  readonly nam: string | null = null;

  get section() {
    return this.http
      .getcars()
      .pipe(
        map((response) => {
          this.massive.push(...response);
        })
      )
      .subscribe();
  }
  get sections() {
    return this.http
      .getfomrs(0, 10)
      .pipe(
        tap((response) => {
          this.sasiv.push(...response.products);
        })
      )
      .subscribe();
  }

  ngOnInit() {
    this.section;
    this.click();
  }

  readonly url = `Products/search?q=`;

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly showChacter$ = this.router.events.pipe(
    startWith(EMPTY),
    map(() => {
      let root = this.activatedRoute.snapshot.root;

      while (root.firstChild) {
        root = root.firstChild;
      }

      const { id } = root.params;
      return Boolean(id);
    })
  );
  readonly httpss = inject(HttpClient);

  total: number = 194;
  limit: number = 10;
  skip: number = 0;

  click() {
    this.http
      .getfomrs(this.skip, this.limit)
      .pipe(
        tap((response) => {
          this.sasiv.push(...response.products);
        })
      )
      .subscribe({});
  }

  loadNextPage() {
    this.skip += this.limit;
    this.click();
    this.sasiv.length = 0;
  }

  loadPreviousPage() {
    if (this.skip >= this.limit) {
      this.skip -= this.limit;
      this.click();
      this.sasiv.length = 0;
    }
  }
  get currentPage(): number {
    return Math.floor(this.skip / this.limit) + 1;
  }

  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }

  readonly msuq: products[] = [];

  forcat(prduct: products) {
    this.msuq.push(prduct);
  }
  get totalPrice(): number {
    return this.msuq.reduce((sum, product) => sum + (product.price || 0), 0);
  }

  deletes(prduct: number) {
    this.http
      .deletproduct(prduct)
      .pipe(tap((response) => {}))
      .subscribe();
  }
}
