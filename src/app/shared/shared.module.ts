import { NgModule } from '@angular/core';
import {SharedLibsModule} from "./shared-libs.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    SharedLibsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedLibsModule
  ]
})
export class SharedModule { }
