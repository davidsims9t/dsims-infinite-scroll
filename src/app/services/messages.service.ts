import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessagesService {
  /**
   * The message endpoint used to load messages.
   * @type {String}
   */
  private _endpoint = '';

  constructor(private http: Http) {}

  /**
   * Takes an optional page token and returns an HTTP response.
   * @param  {string = ''} pageToken - specifies the page offset
   * @return Observable<any>
   */
  getMessages(pageToken: string = ''): Observable<any> {
    if (pageToken.length) {
      pageToken = `pageToken=${pageToken}`;
    }

    return this.http.get(`${this._endpoint}${pageToken}`)
      .map(res => res.json());
  }
}
