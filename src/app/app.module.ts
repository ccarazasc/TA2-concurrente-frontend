import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './layouts/main/main.component';
import {RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {NavbarComponent} from "./layouts/navbar/navbar.component";

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [MainComponent],
  bootstrap: [MainComponent]
})
export class AppModule { }
