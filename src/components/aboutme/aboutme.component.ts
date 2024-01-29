import {
  Component,
  ElementRef,
  AfterViewInit,
  inject,
  TemplateRef,
} from '@angular/core';
import { CheckVisibilityService } from 'src/services/checkVisibility.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  animations: [
    trigger('fadeInUpAnimationAboutMe', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class AboutmeComponent implements AfterViewInit {
  isVisible = false;
  private modalService = inject(NgbModal);

  constructor(
    private checkVisibilityService: CheckVisibilityService,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.checkVisibility();
  }

  checkVisibility() {
    const element = this.el.nativeElement;

    if (this.checkVisibilityService.checkVisibility(element)) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
}
