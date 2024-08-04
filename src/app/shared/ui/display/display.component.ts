import { Component, inject, Input, input, OnInit } from '@angular/core';
import {
  Allprodacts,
  category,
  prodactss,
  products,
} from '../../interfaces/carservise';
import { RouterLink } from '@angular/router';
import { ResultService } from '../../services';
import { tap } from 'rxjs';
import { EpisodPipe } from '../../pipe';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [RouterLink, EpisodPipe],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  @Input() episod: category | null = null;
}
