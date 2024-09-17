import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkExperienceModalComponent } from '../work-experience-modal/work-experience-modal.component';

@Component({
  selector: 'app-experienceeducation',
  templateUrl: './experienceeducation.component.html',
  styleUrls: ['./experienceeducation.component.css'],
})
export class ExperienceeducationComponent {
  constructor(private modalService: NgbModal) {}

  openModal(title: string, description: string) {
    const modalRef = this.modalService.open(WorkExperienceModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.description = description;
  }
}
