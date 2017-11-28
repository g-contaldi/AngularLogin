import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListProductComponent} from './list-product/list-product.component';
import {LoginService} from "./login.service";
import {ProductService} from "./product.service";
import {InterceptorService} from "./interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatButtonModule, MatDialogModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {DialogComponent} from './dialog/dialog.component';
import {AuthGuard} from "./auth-guard.service";
import {SharedService} from "./shared.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListProductComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    LoginService,
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    AuthGuard,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
