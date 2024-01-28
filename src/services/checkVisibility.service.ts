import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CheckVisibilityService {

  checkVisibility(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

    return isVisible;
  }
}
