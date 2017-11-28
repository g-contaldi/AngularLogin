import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {SharedService} from "./shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Login Example';
  logged = false;

  constructor(private loginService: LoginService, private router: Router, private _sharedService: SharedService) {
    let userLogged = localStorage.getItem('user');
    if (userLogged != null)
      this.logged = true;
    _sharedService.changeEmitted$.subscribe(text => {
      console.log(text);
      this.logged = true;
    });
  }

  logout() {
    this.loginService.logout().subscribe(data => {
      console.log('logged out. ' + data)
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }, () => {
      console.log('logged out. ')
      localStorage.removeItem('user');
      this.router.navigate(['login']);
      this.logged = false;
    })
  }

  isLogged(event) {
    console.log(event);
    this.logged = event;
  }
}
