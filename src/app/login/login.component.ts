import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { HelperService } from '../services/helper/helper.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl(null, [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(private api:ApiService,private helper:HelperService, private router:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  login() {
    if (!this.emailFormControl.valid) {
      Swal.fire('Oops...', 'Please enter correct email!', 'error')
      this.emailFormControl.reset()
      return
    }
    if (!this.passwordFormControl.valid) {
      Swal.fire('Oops...', 'Please enter correct password format!', 'error')
      this.passwordFormControl.reset()
      return
    }


  // login user  
    this.auth.login(this.emailFormControl.value , this.passwordFormControl.value).then(data=>{
      console.log('login data', data)
      // user login 
       this.router.navigate(['/dashboard']).then(()=>{
         this.api.setCurrentUser(data.user.uid)
         console.log("the current user form login",data)
        //  console.log(this.api.currentUser)
       })


    },err=> this.helper.openSnackBar(err.message, 'Close'))
  }

}
