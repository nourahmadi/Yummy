import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { DishComponent } from './components/dish/dish.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { FooterComponent } from './components/footer/footer.component';
import { DishPageComponent } from './dish-page/dish-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignUpComponent,
    ProfileComponent,
    LoginComponent,
    DishComponent,
    FooterComponent,
    DishPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RatingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
