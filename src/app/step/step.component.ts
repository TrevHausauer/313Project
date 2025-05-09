import { Component, inject, Input } from '@angular/core';
import { StepService } from '../step.service';
import { Step } from '../../models/step';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step',
  imports: [FormsModule],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css',
})
export class StepComponent {
  stepService = inject(StepService);

  @Input() eventId!: string;
  steps: Step[] = [];
  newStepContent: string = '';

  ngOnInit() {
    this.stepService.getSteps().subscribe((allSteps) => {
      this.steps = allSteps.filter((step) => step.eventId === this.eventId);
    });
  }

  addStep() {
    if (this.newStepContent.trim()) {
      const newStep: Step = {
        id: '',
        eventId: this.eventId,
        content: this.newStepContent,
        order: this.steps.length + 1,
      };

      this.stepService.addStep(newStep);
      this.newStepContent = '';
    }
  }

  updateStep(step: Step) {
    if (!step.content.trim()) return;
    this.stepService.updateStep(step);
  }

  deleteStep(step: Step) {
    this.stepService.deleteStep(step);
  }
}
