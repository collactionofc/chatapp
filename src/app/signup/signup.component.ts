import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ApiService } from "../services/api/api.service";
import { AuthService } from "../services/auth/auth.service";
import { Router } from "@angular/router";
import { HelperService } from "../services/helper/helper.service";
import { async } from "@angular/core/testing";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2'

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {

  public samename=false;

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3),
  ]);

  imageFormControl = new FormControl(" ", []);
  
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(
    private api: ApiService,
    private helper: HelperService,
    private router: Router,
    private auth: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  register() {
    
    if (!this.nameFormControl.valid) {
      Swal.fire('Oops...', 'Please enter Name!', 'error')
      this.nameFormControl.reset();
      return;
    }
    if (!this.emailFormControl.valid) {
      Swal.fire('Oops...', 'Please enter correct email!', 'error')
      this.emailFormControl.reset();
      return;
    }

    if (!this.passwordFormControl.valid) {
      Swal.fire('Oops...', 'Please enter correct password format!', 'error')
      this.passwordFormControl.reset();
      return;
    }

 

 

    this.api.userexist(this.nameFormControl.value).subscribe(async(res) => {
      this.spinner.show();
      if (res.length == 0) { 
        this.auth
          .signup(this.emailFormControl.value, this.passwordFormControl.value)
          .then(
            (data) => {
              console.log("user", data.user);
              this.api
                .createUser(data.user.uid, {
                  name: this.nameFormControl.value,
                  email: this.emailFormControl.value,
                  image: this.imageFormControl.value,
                  uid: data.user.uid,
                  conversations: [],
                })
                .then(() => {
                  localStorage.setItem("uid", data.user.uid);
                  console.log("set uid of current user", data.user.uid);
                  this.spinner.hide();
                  this.router.navigate(["/dashboard"]).then(() => {
                    setTimeout(() => {
                      this.helper.openSnackBar("Welcome to Chat App", "Close");
                    }, 1000);
                  });
                });
            },
            (err) => {
              this.spinner.hide();
              this.helper.openSnackBar(err.message, "Close");
              this.emailFormControl.reset();
              this.passwordFormControl.reset();

            }
          );
      } else {
        this.samename=true;
        this.spinner.hide();
      }
    });
  }
}
