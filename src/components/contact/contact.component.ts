import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CheckVisibilityService } from 'src/services/checkVisibility.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeInUpAnimationContact', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('2000ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent implements AfterViewInit {
  isVisible = false;

  constructor(private checkVisibilityService: CheckVisibilityService, private el: ElementRef) {}

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
}
