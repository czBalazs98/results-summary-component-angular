import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-list-item',
  templateUrl: './summary-list-item.component.html',
  styleUrls: ['./summary-list-item.component.scss']
})
export class SummaryListItemComponent {
  
  @Input({ required: true })
  imgSrc!: string;

  @Input({ required: true })
  bgColor!: string;

  @Input({ required: true })
  textColor!: string;

  @Input()
  points: string = '0';

  @Input({ required: true })
  text!: string;
}
