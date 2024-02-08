import {Component, Input} from '@angular/core';
import {ActivitySummary} from "../activity-summary";

@Component({
  selector: 'app-word-activity-end',
  standalone: true,
  imports: [],
  templateUrl: './word-activity-end.component.html',
  styleUrl: './word-activity-end.component.css'
})
export class WordActivityEndComponent {

  @Input() activitySummary : ActivitySummary = new ActivitySummary(0);
}
