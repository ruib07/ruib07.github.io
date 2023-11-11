import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CheckVisibilityService } from 'src/services/checkVisibility.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeInUpAnimationSkills', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1600ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent implements AfterViewInit {
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
