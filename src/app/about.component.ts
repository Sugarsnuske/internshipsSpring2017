import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  template: `
  <h1>This is the about component.</h1>
  <h3>We hope you are still feeling fine..</h3>
  
  `
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}