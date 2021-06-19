import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataSetComponent} from "./data-set.component";
import {RouterModule} from "@angular/router";
import {dataSetRoute} from "./data-set.route";
import {SharedModule} from "../../shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DataSetPredictComponent } from './data-set-predict.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [DataSetComponent, DataSetPredictComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(dataSetRoute),
    NgbModule,
    SharedModule,
  ]
})
export class DataSetModule { }
