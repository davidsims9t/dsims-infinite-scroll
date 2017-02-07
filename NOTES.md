# Notes on Infinite Scroll Google Project

## Procedure

### Framework Decision

First I had to decide on a front-end framework to use for this prototype application. I decided to use Angular 2, because it's a Google framework and I have experience with Angular 1, so I figure it would be a relatively easy transition to get up-to-speed.

### Installation

After I chose a framework to use I need to install Angular 2 and create the application, which was relatively easy using the command line.

### Testing

The next step was to right my unit and end-to-end tests. When writing my tests, I knew the prototype had several requirements. The first requirement was that the app needed a fixed header, so I wrote a test to see that the header is being rendered with the proper title and navigation button.

The next tests I wrote were for the message list. The message list, according to the specification document, required that the messages come from an API. When interacting with Angular, you must create a service to digest data from an API using an observable. I created a test to test that the message observable is being initiated and is sending and receiving requests from the API.

After the service tests were written, the next step was to write a test to see that the message list continues to load messages when the user scrolls down the page. Finally the last requirement I wrote a test for was to test to see that messages disappeared when the user swipes left or right on a message.

### Implementation

## Issues

Safari requires a webkit vendor prefix on the css transform property, so I had to fork hammerjs in order to
get the swipe gestures to work correctly.

### Styling Decisions

I decided to use the Angular Material Design library for a styling, because it required the least amount of customization from the mock-ups to create the prototype according to the mock-ups.

Even though, according to the design specifications, the header is meant to be in a fixed position when scrolling, I decided to instead make the header hidden while scrolling down and appear only when scrolling up. The reason I did this was because I looked at my Gmail app on my iPhone and noticed this was the behavior was present.
