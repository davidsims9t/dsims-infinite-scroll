/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { StickDirective } from './directives/stick.directive';
import { WindowRefService } from './services/window-service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StickDirective
      ],
      providers: [WindowRefService],
      imports: [
        HttpModule,
        MaterialModule.forRoot(),
        InfiniteScrollModule,
        MomentModule
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have an empty message list`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.messages).toEqual([]);
  }));

  it('should render the toolbar with title "Messages"', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.nav-title').textContent).toContain('Messages');
  }));

  it('should render the sidebar with content "This is some place holder content."', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.sidenav').textContent).toContain('This is some place holder content.');
  }));

  it('should render the card container', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // console.log(compiled.querySelector('.card'));
    // expect(compiled.querySelector('.card-container').textContent).toContain('');
  }));
});
