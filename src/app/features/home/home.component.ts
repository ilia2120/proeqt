import { Component, inject, OnInit } from '@angular/core';
import { imghome } from '../../shared/consts';
import { ResultService } from '../../shared/services';
import { products } from '../../shared/interfaces/carservise';
import { tap } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  private readonly http = inject(ResultService);
  readonly sasi: products[] = [];

  readonly pictures = imghome;

  ngOnInit() {
    this.http
      .getfomrs(0,10)
      .pipe(
        tap((response) => {
          this.sasi.push(...response.products);
        })
      )
      .subscribe();
  }
}
