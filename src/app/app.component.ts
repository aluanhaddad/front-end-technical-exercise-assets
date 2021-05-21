import { Component } from '@angular/core';
import FormattedStep from './models/formatted-step';
import { StepService } from './step.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public stepService: StepService) { }

  steps: FormattedStep[] = [];

  async ngOnInit() {
    this.steps = await this.stepService.getSteps();
  }
}
