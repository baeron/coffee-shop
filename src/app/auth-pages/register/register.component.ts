import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  profileForm = new FormGroup({
    userName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor (
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    const userProfile = this.profileForm.value;
    debugger;
    console.log(userProfile);
    this.createUser(userProfile);
  }

  createUser(userData) {
    this.authService.registerUser(userData).subscribe(data => {
      debugger;
      console.log(data);
      // if (data.success) {
        // this.flashMessage.show('You are now registered and can log in!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/home']);
      // } else {
        // this.flashMessage.show('Something went wrong!!', {cssClass: 'alert-danger', timeout: 3000});
        // this.router.navigate(['/register']);
      // }
    });
  }

}
