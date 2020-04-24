import { NgModule } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BooksListComponent } from './books-list/books-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent} from './header/header.component';
import {AuthService} from './shared/auth.service';
import {AuthGuardService} from './shared/auth-guard.service';
import {AdherantCreateComponent} from './adherant-create/adherant-create.component';
import { AdherantEditComponent } from './adherant-edit/adherant-edit.component';
import { AdherantsListComponent } from './adherants-list/adherants-list.component';
import { PretCreateComponent } from './pret-create/pret-create.component';
import { PretsListComponent } from './prets-list/prets-list.component';
import { PretEditComponent } from './pret-edit/pret-edit.component';
import { ActiviteCreateComponent } from './activite-create/activite-create.component';
import { ActivitesListComponent } from './activites-list/activites-list.component';
import { ActiviteEditComponent } from './activite-edit/activite-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-book' },
  { path: 'auth/signin',component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'create-book', canActivate:[AuthGuardService], component: BookCreateComponent },
  { path: 'books-list',canActivate:[AuthGuardService], component: BooksListComponent },
  { path: 'book-edit/:codeBarre',canActivate:[AuthGuardService],  component: BookEditComponent },
  { path: 'create-adherant', canActivate:[AuthGuardService], component: AdherantCreateComponent },
  { path: 'adherants-list',canActivate:[AuthGuardService], component: AdherantsListComponent },
  { path: 'adherant-edit/:idAdherant',canActivate:[AuthGuardService],  component: AdherantEditComponent },
  { path: 'create-pret', canActivate:[AuthGuardService], component: PretCreateComponent },
  { path: 'prets-list',canActivate:[AuthGuardService], component: PretsListComponent },
  { path: 'pret-edit/:idpret',canActivate:[AuthGuardService],  component: PretEditComponent },
  { path: 'create-activite', canActivate:[AuthGuardService], component: ActiviteCreateComponent },
  { path: 'activites-list',canActivate:[AuthGuardService], component: ActivitesListComponent },
  { path: 'activite-edit/:idActivite',canActivate:[AuthGuardService],  component: ActiviteEditComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
