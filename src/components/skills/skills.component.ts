import { Component, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeInUpAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent implements AfterViewInit {
  isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

    if (isVisible && !this.isVisible) {
      this.isVisible = true;
      this.renderer.addClass(this.el.nativeElement, 'visible');
    }
  }
}
