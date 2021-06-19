import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedLibsModule { }
