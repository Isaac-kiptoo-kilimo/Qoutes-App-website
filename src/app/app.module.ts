import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddQuoteComponent } from './quote/add-quote/add-quote.component';
import { QouteDetailComponent } from './quote/qoute-detail/qoute-detail.component';
import { BestquoteDirective } from './directives/bestquote.directive';
import { TimesincePipe } from './pipes/timesince.pipe';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NavbarComponent,
    AddQuoteComponent,
    QouteDetailComponent,
    BestquoteDirective,
    TimesincePipe,
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
