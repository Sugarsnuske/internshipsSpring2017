import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'internships',
  template: `
  <h1>This is the internships component.</h1>
  <h3>This will display all the internships.. at some point..</h3>
  <a routerLink="index">All reports</a>
  <a routerLink="new-internship">Create new internship</a>
  <router-outlet></router-outlet>
  `
})
export class InternshipsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}