import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
     
    });
   }
  registerForm : FormGroup;
  ngOnInit(): void { 
  }

  onSubmitLogin() {
    
  }

  allFieldsFilled(): boolean {
    const controls = this.registerForm.controls;
    for (const controlName in controls) {
      if (controls.hasOwnProperty(controlName)) {
        const control = controls[controlName];
        if (control.invalid || control.value === '') {
          return false;
        }
      }
    }
    return true;
  }
}
