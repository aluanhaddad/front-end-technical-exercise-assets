import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import FormattedStep from './models/formatted-step';
import Step from './models/step';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  async getSteps() {
    const response = await fetch(environment.apiUrl);
    const steps = <Step[]>await response.json();

    const today = new Date();

    return steps.slice()
      .sort(compareStepsByNumber)
      .map(toDisplayModel);

    /**
     *
     * @param step A Step structure
     * @returns A representation of the specified step, preprocessed to be view relevant and view ergonomic.
     */
    function toDisplayModel({ stepNumber, versionContent, ...step }: Step): FormattedStep {
      const mostRecentContent = versionContent.slice()
        .sort((x, y) => new Date(y.effectiveDate).valueOf() - new Date(x.effectiveDate).valueOf())
        .find(({ effectiveDate }) => new Date(effectiveDate).valueOf() < today.valueOf()) ?? versionContent[0];

      return {
        stepNumber: stepNumber.padStart(2, '0'),
        ...step,
        ...mostRecentContent,
      };
    }
    function compareStepsByNumber(x: Step, y: Step) {
      return Number(x.stepNumber) - Number(y.stepNumber);
    }

  }
}
