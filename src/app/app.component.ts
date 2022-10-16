import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultValue = "pet";
  answer = "";

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  //Pass form to onSubmit method
  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  //Alternative method to submit the form using viewchild - useful to access form before it is submitted
  onSubmit() {
    console.log(this.signupForm);
  }
}
