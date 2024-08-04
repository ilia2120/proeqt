import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  output,
  Output,
} from '@angular/core';
import { prodactss, products } from '../../interfaces/carservise';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-creat',
  standalone: true,
  imports: [],
  templateUrl: './creat.component.html',
  styleUrl: './creat.component.scss',
})
export class CreatComponent {
  @Input() masive: products | null = null;
  @Output() forcart = new EventEmitter<products>();
  oclick() {
    if (this.masive) {
      this.forcart.emit(this.masive);
    }
  }
}
