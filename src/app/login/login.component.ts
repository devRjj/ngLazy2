import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup

  constructor(private fb:FormBuilder){}

  obj!: loginInterface[];

  ngOnInit(){

    this.createLogin()
  }

  createLogin(){
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  onSubmit(){
    this.obj = this.loginForm.value;

    console.log(this.obj);
  }

}

export interface loginInterface{
  username: string
  password: string
}
