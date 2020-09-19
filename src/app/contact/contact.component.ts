import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <section class="section"> 
  <div class="container">

		<form (ngSubmit)="submitForm()">
			<div class="field">
				<label class = "label">Name</label>
				<input type="text" name="name" class="input" [(ngModel)] = "name">
			</div>
			<div class="field">
				<label class = "label">Email</label>
				<input type="email" name="email" class="input" [(ngModel)] = "email">
			</div>
			<div class="field">
				<label class = "label">Your Message</label>
				<textarea name="message" class="textarea" [(ngModel)] = "message"> </textarea>
			</div>

			<button type="submit" class="button is-large is-warning">
				send!
			</button>
		</form>
	</div>
</section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;


  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message= `Mi nombre es: ${this.name} , Mi email es: ${this.email}, Mi mensaje es ${this.message}`;
    alert(message);
  }

}
