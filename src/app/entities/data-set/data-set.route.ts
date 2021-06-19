import {Routes} from "@angular/router";
import {DataSetComponent} from "./data-set.component";
import {DataSetPredictComponent} from "./data-set-predict.component";


export const dataSetRoute: Routes = [
  {
    path: 'data',
    component: DataSetComponent,
  },
  {
    path: 'predict',
    component: DataSetPredictComponent,
  }
]
