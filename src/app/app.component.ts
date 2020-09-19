import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <app-header></app-header>
  <app-contact></app-contact>
  <app-home></app-home>
  <app-bar></app-bar>
  <app-pie></app-pie>
  <app-scatter></app-scatter> 
  <router-outlet></router-outlet>
  
  <app-footer></app-footer>
  
  `,
  styles: []
})
export class AppComponent {
  title = 'visproject';
}
