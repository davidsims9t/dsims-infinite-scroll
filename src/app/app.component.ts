import {
  Component,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

/**
 * The infinite scroll directive.
 */
import { InfiniteScroll } from 'angular2-infinite-scroll';

/**
 * The message service is used to load messages on load and
 * on scroll.
 */
import { MessagesService } from './services/messages.service';

/**
 * The app component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagesService],
  animations: [
    trigger('flyInOut', [
      state('void', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('swiperight', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('swipeleft', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('* => *', [
        animate('0.2s 10 ease-out')
      ])
    ])
  ]
})
export class AppComponent {
  /**
   * An array of messages containing all of our messages.
   * @type {Message[]}
   */
  messages: Message[] = [];

  /**
   * Used as an offset to specify what item to start from.
   * @type {string}
   */
  pageToken: string;

  /**
   * The image base URL.
   * @type {string}
   */
  imgUrl: string = '';

  constructor(private messagesService: MessagesService) {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messagesService.getMessages(this.pageToken).subscribe(res => {
      this.messages = this.messages.concat(res.messages);
      this.pageToken = res.pageToken;
    });
  }

  swipe(index: number, action: string): void {
    if (action === 'swipeleft' || action === 'swiperight') {
      this.messages[index].swipe = action;
    }
  }

  animationDone(index: number, action: string): void {
    if (action === 'swipeleft' || action === 'swiperight') {
      this.messages.splice(index, 1);
    }
  }
}

/**
 * An interface for the message author
 */
interface Author {
  name: string;
  photoUrl: string;
}

/**
 * An interface for an individual message
 */
interface Message {
  id: number;
  content: string;
  updated: string;
  author: Author;
  swipe: string;
}
