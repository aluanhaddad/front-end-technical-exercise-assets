import { Component, Input } from '@angular/core';
import FormattedStep from '../models/formatted-step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
})
export class StepComponent {
  @Input() model: FormattedStep | undefined;
}
