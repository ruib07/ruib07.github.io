import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-work-experience-modal',
  templateUrl: './work-experience-modal.component.html',
  styleUrls: ['./work-experience-modal.component.css'],
})
export class WorkExperienceModalComponent {
  @Input() title!: string;
  @Input() description!: string;

  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }
}
