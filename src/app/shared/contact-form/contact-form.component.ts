// Core
import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// App specific
import { ContactFormService } from './contact-form-service/contact-form.service';
import { DialogsService } from '../dialogs/dialogs.service';

// Moment
import * as moment from 'moment/moment';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  // TODO: get apartments list

  form: FormGroup;

  reRender = false;
  emailValid = false;
  formValid = false;
  nameError = '';
  emailError = '';
  messageError = '';
  nameHasErrors = true;
  emailHasErrors = true;
  messageHasErrors = true;
  // tslint:disable-next-line
  emailRegex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  formObject: any;

  apartmentDetails = JSON.parse(sessionStorage.getItem('apartmentsData'));

  minDate = moment();

  startDate: any;
  endDate: any;

  constructor(
    public formBuilder: FormBuilder,
    private contactFormService: ContactFormService,
    private dialogService: DialogsService,
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {
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
    if (this.form.valid) {
      this.formObject = {
        name: formData.value.name,
        email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message
      };
      this.contactFormService.submitForm(this.formObject).subscribe(
        (response) => {
          this.messageDialog(response.toString(), response.toString());
        },
        (error) => {
          this.messageDialog(error.toString(), error.toString());
        }
      );
      this.resetForm();
    }
  }

  public validateEmail(email) {
    return this.emailRegex.test(email);
  }

  public messageDialog(title: string, message: string) {
    this.dialogService.confirm(title, message, this.viewContainerRef)
  }

  /**
   * Resets form values and re-renders the component in order to bring form back to initial state
   */
  public resetForm() {
    // this.form.reset();
    this.reRender = true;
    this.rebuildForm();
    this.cdRef.detectChanges();
    this.reRender = false;
  }

  public rebuildForm() {
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

}
