// Core
import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// App specific
import { ContactFormService } from './contact-form-service/contact-form.service';
import { DialogsService } from '../dialogs/dialogs.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  private reRender = false;
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

  constructor(
    public formBuilder: FormBuilder,
    private _contactFormService: ContactFormService,
    private _dialogService: DialogsService,
    private _viewContainerRef: ViewContainerRef,
    private _cdRef: ChangeDetectorRef
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
      this._contactFormService.submitForm(this.formObject).subscribe(
        (response) => {
          this.messageDialog(response.header, response.message);
        },
        (error) => {
          this.messageDialog(error.header, error.message);
        }
      );
      this.resetForm();
    }
  }

  public validateEmail(email) {
    return this.emailRegex.test(email);
  }

  public messageDialog(title: string, message: string) {
    this._dialogService.confirm(title, message, this._viewContainerRef)
  }

  /**
   * Resets form values and re-renders the component in order to bring form back to initial state
   */
  public resetForm() {
    // this.form.reset();
    console.log(this.form, 'ova forma');
    this.reRender = true;
    this._cdRef.detectChanges();
    this.reRender = false;
  }

}
