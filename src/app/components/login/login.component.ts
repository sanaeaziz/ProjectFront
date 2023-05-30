import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/common/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //admin: Admin = new Admin();

  // errorMessage:string;
  admin = {
    username: '',
    password: ''
  }


  errorMessage = 'invalide value'
  invalidLogin = false


  //Router
  //Angular.gitMeRouter
  //Dependecy Injection

  constructor(private router: Router) { }


  ngOnInit() { }

  handelLogin() {
    // console.log(this.username);
    // console.log(this.password);

    if (this.admin.username === 'sanae' && this.admin.password === 'aziz') {
      this.router.navigate(['admins'])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true;
    }
  }

  // login(){
  //   this.authService.logIn(this.user)
  //     .subscribe(data=>{
  //       this.router.navigate(['/profile']);
  //       },err=>{
  //       this.errorMessage="error :  Username or password is incorrect";
  //       }
  //     )
  // }


}
