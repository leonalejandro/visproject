import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Pagina Home
        </h1>
        <h2 class="subtitle">
          Subtitulo 1
        </h2>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .hero {
      background-size: cover;
      background-position: center center;
    }
  
  
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
