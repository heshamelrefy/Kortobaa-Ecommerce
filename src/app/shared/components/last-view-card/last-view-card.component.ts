import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-last-view-card',
  templateUrl: './last-view-card.component.html',
  styleUrls: ['./last-view-card.component.scss']
})
export class LastViewCardComponent {
  @Input() product!:IProduct
}
