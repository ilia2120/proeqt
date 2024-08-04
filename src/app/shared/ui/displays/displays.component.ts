import { Component, inject, Input, OnInit } from '@angular/core';
import { Allprodacts, category, products } from '../../interfaces/carservise';
import { ResultService } from '../../services';
import { tap } from 'rxjs';

@Component({
  selector: 'app-displays',
  standalone: true,
  imports: [],
  templateUrl: './displays.component.html',
  styleUrl: './displays.component.scss',
})
export class DisplaysComponent {
  @Input() episod: products[] = [];
}
