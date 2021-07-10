// Core
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

// App specific
import { ContactFormService } from './contact-form-service/contact-form.service';
import { DialogsService } from '../dialogs/dialogs.service';
import { Contact } from './contact-form';

// Moment
import * as moment from 'moment/moment';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  apartmentDetails = [
    {
      name: 'Apartment Dubrovnik Center'
    },
    {
      name: 'Lavanda'
    },
    {
      name: 'Love & Hope'
    },
    {
      name: 'Old Port'
    }
  ];
  minDate = moment();

  // tslint:disable-next-line
  emailRegex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  private emailValidationMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  };
  emailError: string;

  private nameValidationMessages = {
    required: 'Please enter your name.',
    minlength: 'Minimum name length is 2 characters.',
    maxlength: 'Maximum name length is 30 characters.'
  };
  nameError: string;

  private bodyValidationMessages = {
    required: 'Please enter your message.',
    minlength: 'Minimum message length is 2 characters.',
    maxlength: 'Maximum message length is 500 characters.'
  };
  bodyMessageError: string;

  contact: Contact = new Contact();

  constructor(private formBuilder: FormBuilder,
              private contactFormService: ContactFormService,
              private dialogService: DialogsService,
              private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      contactName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      subject: '',
      message: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      apartment: '',
      bookingStart: '',
      bookingEnd: ''
    });

    const emailControl = this.contactForm.get('email');
    emailControl.valueChanges.debounceTime(800).subscribe( val => this.setEmailMessage(emailControl));

    const nameControl = this.contactForm.get('contactName');
    nameControl.valueChanges.debounceTime(800).subscribe(val => this.setNameMessage(nameControl));

    const bodyMessageControl = this.contactForm.get('message');
    bodyMessageControl.valueChanges.debounceTime(800).subscribe( val => this.setBodyMessages(bodyMessageControl))
  }

  save() {

    if (this.contactForm.valid) {
      const formObject: Contact = {
        apartment: this.contactForm.value.apartment,
        bookingEnd: this.contactForm.value.bookingEnd,
        bookingStart: this.contactForm.value.bookingStart,
        contactName: this.contactForm.value.contactName,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        subject: this.contactForm.value.subject
      };

      this.contactFormService.submitForm(formObject).subscribe(
        (res) => {
          this.messageDialog(res['header'], res['message']);
        },
        (error) => this.messageDialog(error['header'], error['message'])
      );
    }
  }

  setEmailMessage(c: AbstractControl): void {
    this.emailError = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailError = Object.keys(c.errors).map(key => this.emailValidationMessages[key]).join(' ');
    }
  }

  setNameMessage(c: AbstractControl): void {
    this.nameError = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.nameError = Object.keys(c.errors).map(key => this.nameValidationMessages[key]).join(' ');
    }
  }

  setBodyMessages(c: AbstractControl): void {
    this.bodyMessageError = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.bodyMessageError = Object.keys(c.errors).map(key => this.bodyValidationMessages[key]).join(' ');
    }
  }

  messageDialog(title: string, message: string) {
      this.dialogService.confirm(title, message, this.viewContainerRef)
  }

}
