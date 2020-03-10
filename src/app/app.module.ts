import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminModule } from './admin/admin.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';



const firebaseConfig = {
  apiKey: "AIzaSyB7jVG6nDmVimdjRPmGr5z5EuiSW64oxiU",
  authDomain: "portfolio-7e51c.firebaseapp.com",
  databaseURL: "https://portfolio-7e51c.firebaseio.com",
  projectId: "portfolio-7e51c",
  storageBucket: "portfolio-7e51c.appspot.com",
  messagingSenderId: "129596278368",
  appId: "1:129596278368:web:7d76e2c3d784d9bc216505",
  measurementId: "G-Q9BT8PE1BM"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
