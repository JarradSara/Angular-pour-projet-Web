import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BooksListComponent } from './books-list/books-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent} from './header/header.component';
import {AuthService} from './shared/auth.service';
import {AuthGuardService} from './shared/auth-guard.service';
import { AdherantCreateComponent } from './adherant-create/adherant-create.component';
import { AdherantEditComponent } from './adherant-edit/adherant-edit.component';
import { AdherantsListComponent } from './adherants-list/adherants-list.component';
import { AdherantService } from './shared/adherant.service';
import { PretCreateComponent } from './pret-create/pret-create.component';
import { PretEditComponent } from './pret-edit/pret-edit.component';
import { PretsListComponent } from './prets-list/prets-list.component';
import { PretService } from './shared/pret.service';
import { ActiviteCreateComponent } from './activite-create/activite-create.component';
import { ActiviteEditComponent } from './activite-edit/activite-edit.component';
import { ActivitesListComponent } from './activites-list/activites-list.component';
import { ActiviteService } from './shared/activite.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookCreateComponent,
    BookEditComponent,
    BooksListComponent,
    AdherantCreateComponent,
    AdherantEditComponent,
    AdherantsListComponent,
    PretCreateComponent,
    PretEditComponent,
    PretsListComponent,
    ActiviteCreateComponent,
    ActiviteEditComponent,
    ActivitesListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdherantService,
    PretService,
    ActiviteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
