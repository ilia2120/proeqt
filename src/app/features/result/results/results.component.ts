import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '../../../shared/services';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import {
  products,
} from '../../../shared/interfaces/carservise';
import { DisplaysComponent } from '../../../shared/ui/displays/displays.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [DisplaysComponent, AsyncPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export default class ResultsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly servis = inject(ResultService);

  readonly #servi = new Subject<products[]>();
  readonly serv$ = this.#servi.asObservable();

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap((event) => {
          const { id } = event;
          this.servis
            .getprudacts(id)
            .pipe(
              tap((response) => {
                this.#servi.next(response.products);
              })
            )
            .subscribe();
        })
      )
      .subscribe();

    this.activatedRoute.params
      .pipe(
        tap((event) => {
          const { id } = event;
          this.servis
            .getproductsss(id)
            .pipe(
              tap((response) => {
                this.#servi.next(response.products);
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }
}
