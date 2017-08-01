// Core
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// App specific
import { ContactFormService } from './contact-form-service/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  // used to submit form only once
  public formSent = false;

  public emailValid = false;
  public formValid = false;
  public nameError = '';
  public emailError = '';
  public messageError = '';
  public nameHasErrors = true;
  public emailHasErrors = true;
  public messageHasErrors = true;
  public emailRegex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public formObject: any;

  constructor(public formBuilder: FormBuilder, private _contactFormService: ContactFormService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: '',
      message: ['', Validators.required],
    });

    /* custom name validation */
    this.form.controls['name'].valueChanges.debounceTime(400).subscribe(data => {
      if (data.length < 2) {
        this.nameError =  'Name has to be between 2 and 30 characters long';
        return this.nameError;
      }else {
        this.nameError = '';
        return this.nameError;
      }
    });

    /* custom email validation */
    this.form.controls['email'].valueChanges.debounceTime(400).subscribe(data => {
      this.emailValid = this.validateEmail(data);
      if (data.length > 0 && !this.emailValid) {
        this.emailError =  'Please enter valid email address';
        return this.emailError;
      }else {
        this.emailError = '';
        return this.emailError;
      }
    });

    /* custom subject validation */
    this.form.controls['message'].valueChanges.debounceTime(400).subscribe(data => {
      if (data.length < 2) {
        this.messageError =  'Message has to be longer than 2 characters';
        return this.messageError;
      }else {
        this.messageError = '';
        return this.messageError;
      }
    });
  }

  public ngOnInit() {
  }

  public submitForm(formData: FormGroup) {
    console.log(formData, 'FORM DATA');
    console.log(formData.value.email, 'form email');
    // if (this.form.valid && !this.formSent) {
    if (this.form.valid) {
      this.formObject = {
        name: formData.value.name,
        email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message
      };
      this._contactFormService.submitForm(this.formObject).subscribe();
      console.log(this.formObject, 'email object');
      this.formSent = true;
      console.log('form is valid');
      return this.formSent;
    }
  }

  public validateEmail(email) {
    return this.emailRegex.test(email);
  }

}
