/**
 * BrowserModule and NgModule are used
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * HttpModule used for API requests in services.
 */
import { HttpModule } from '@angular/http';

/**
 * The Material Design Angular Module, used for the toolbar and cards.
 */
import { MaterialModule } from '@angular/material';

/**
 * The moment.js module, used for formatting message dates.
 */
import { MomentModule } from 'angular2-moment';

/**
 * Infinite scroll module used for the message infinite scroll.
 */
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

/**
 * The main app component.
 */
import { AppComponent } from './app.component';

/**
 * The window ref service used to detect the pageYOffset.
 */
import { WindowRefService } from './services/window-service';

/**
 * The sticky header directive.
 */
import { StickDirective } from './directives/stick.directive';

/**
 * Declare dependencies and load the app.
 */
@NgModule({
  declarations: [
    AppComponent,
    StickDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    InfiniteScrollModule,
    MomentModule
  ],
  providers: [WindowRefService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
