import { Component, Input } from '@angular/core';
import { Feedback } from './utils/feedback.class';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  @Input({ required: true }) public set feedback(value: Feedback) {
    if (value) {
      console.log(value);
      this.urlImage = value.getUrlImage();
      this.caption = value.type;
    }
  }

  public urlImage = '';
  public caption = '';

  constructor() {}
}
