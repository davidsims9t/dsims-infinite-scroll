import { Injectable } from '@angular/core';

/**
 * Returns an instance of window.
 * Used to detect the window pageYOffset when scrolling to show or hide the header.
 */
@Injectable()
export class WindowRefService {
    get nativeWindow(): any {
      return window;
    }
}
