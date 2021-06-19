import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./entities/entities.module').then(m => m.EntitiesModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, FormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
