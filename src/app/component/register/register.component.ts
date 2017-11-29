import {Component} from '@angular/core';
import {LoginService} from "../../provider/login.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {username: '', password: '', profileType: 'ROLE_ADMIN'};

  constructor(private loginService: LoginService, private router: Router, public dialog: MatDialog) {
  }

  register() {
    this.loginService.register(this.user).subscribe(data => {
      console.log(data);
      let dialogRef = this.dialog.open(DialogComponent, {
        width: '250px'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.router.navigate(['login']);
      });
    }, err => {
      console.log(err);
    })
  }

}
