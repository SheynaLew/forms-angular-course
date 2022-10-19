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
  genders = ["Male", "Female", "Non-binary", "Gender-fluid", "Other", "Prefer not to say"];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // The below works, BUT it resets the entire form, so if you're entering data and then clicking the button, it will clear everything you've entered.
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: this.genders[5]
    // })
    // This method is better as you can target specific aspects of the form:
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }


  //Pass form to onSubmit method
  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  //Alternative method to submit the form using viewchild - useful to access form before it is submitted
  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.secretAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset({
      userData: {
        username: '',
        email: ''
      },
      secret: this.defaultValue,
      questionAnswer: '',
      gender: ''
    });
  }
}
