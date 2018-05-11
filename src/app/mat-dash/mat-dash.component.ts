import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-dash',
  templateUrl: './mat-dash.component.html',
  styleUrls: ['./mat-dash.component.css']
})
export class MatDashComponent {
  cards = [
    { title: 'Using StackBlitz & Angular for Rapid App Prototyping - Eric Simons and Albert Pai',
    cols: 2, rows: 1, iFrame: 'https://www.youtube.com/embed/EBzoTnX6LzU?rel=0&amp;showinfo=0' },
    { title: 'StackBlitz + Angular A Better Way to Build PWA"s - Albert Pai, Eric Simons',
    cols: 1, rows: 1, iFrame: 'https://www.youtube.com/embed/P1-HAN1g4_4?rel=0&amp;showinfo=0' },
    { title: 'Angular CDK and Material in 2018 - Jeremy Elbourn',
    cols: 1, rows: 1, iFrame: 'https://www.youtube.com/embed/v__RuD9RX3I?rel=0&amp;showinfo=0' },
    { title: '6 APPS ONE CODE WITH ANGULAR - Sani Yusuf',
    cols: 1, rows: 1, iFrame: 'https://www.youtube.com/embed/imaTBx4jbwY?rel=0&amp;showinfo=0' },
    { title: 'Let’s Build A Form Around It - Sani Yusuf',
    cols: 1, rows: 1, iFrame: 'https://www.youtube.com/embed/7ZbVSewN21A?rel=0&amp;showinfo=0' },
    { title: 'How to score 100 on a Angular Progressive Web App Audit - Anas R Firdousi',
    cols: 1, rows: 1, iFrame: 'https://www.youtube.com/embed/hF4lzKmyfPU?rel=0&amp;showinfo=0' },
    { title: 'Super Powered, Server Rendered Progressive Native Apps - Nathan Walker, Jeff Whelpley',
    cols: 1, rows: 1, iFrame: 'https://www.youtube.com/embed/EqqNexmu3Ug?rel=0&amp;showinfo=0' },
    { title: 'I switched a map and you"ll never guess what happened next - Pete Darwin, Shai Reznik, Mike Brocchi',
    cols: 2, rows: 1, iFrame: 'https://www.youtube.com/embed/rUZ9CjcaCEw?rel=0&amp;showinfo=0' },
  ];
}
