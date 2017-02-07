import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

/**
 * Used to detect the pageYOffset
 */
import { WindowRefService } from '../services/window-service';

@Directive({
  selector: '[stick]'
})
export class StickDirective {
  /**
   * The last pageYOffset from the previous scroll event.
   * @type {number}
   */
  private _lastPageYOffset: number = 0;

  /**
   * The name of the css class.
   * @type {string}
   */
  private _className: string = 'stick';

  /**
   * Sets the sticky header class.
   * @param  {string} 'stickClass' - the css class name
   * @return {void}
   */
  @Input('stickClass') set stickClass(className: string) {
    this._className = className || this._className;
  }

  constructor(private _element: ElementRef, private _window: WindowRefService) {}

  /**
   * The handler that is triggered after a window scroll event is triggered.
   * @param  {Event}  e - the window event object.
   * @return {void}
   */
  @HostListener('window:scroll', ['$event'])
  handleScrollEvent(e): void {
    const pageYOffset = this._window.nativeWindow.pageYOffset;
    if (pageYOffset === 0 || pageYOffset > this._lastPageYOffset) {
      this._element.nativeElement.classList.remove(this._className);
    } else {
      this._element.nativeElement.classList.add(this._className);
    }

    this._lastPageYOffset = pageYOffset;
  }
}
