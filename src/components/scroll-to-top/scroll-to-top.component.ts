/* eslint-disable @typescript-eslint/prefer-readonly */
import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  private scrollLimit = 600
  public isButtonVisible = false

  @HostListener('window:scroll', [])
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  onWindowScroll () {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    this.isButtonVisible = currentScroll > this.scrollLimit
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  scrollToTop () {
    (function smoothscroll () {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll)
        window.scrollTo(0, currentScroll - (currentScroll / 8))
      }
    })()
  }
}
