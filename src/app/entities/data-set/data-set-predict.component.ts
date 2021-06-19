import { Component, OnInit } from '@angular/core';
import {IRowData, RowData} from "../../shared/models/row-data";
import {FormBuilder, Validators} from "@angular/forms";
import {DataSetService} from "./data-set.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-set-predict',
  templateUrl: './data-set-predict.component.html',
})
export class DataSetPredictComponent implements OnInit {

  rowsDataPredict: IRowData[]=[];

  editForm = this.fb.group({
    id: ['',[Validators.required]],
    titular: [''],
    ruc: [''],
    titulo_proyecto: [''],
    unidad_proyecto: [''],
    tipo: [''],
    actividad: [''],
    fecha_inicio: [''],
    estado: [''],
    descripcion: [''],
    longitud: [''],
    latitud: [''],
    resolucion: [''],
    label: [''],
  });
  constructor(
    private fb: FormBuilder,
    protected dataSetService: DataSetService,
    private router: Router

  ) { }

  ngOnInit(): void {

  }
  private createFromForm(): IRowData {
    return {
      ...new RowData(),
      id: this.editForm.get(['id'])!.value,
      titular: this.editForm.get(['titular'])!.value,
      ruc: this.editForm.get(['ruc'])!.value,
      titulo_proyecto: this.editForm.get(['titulo_proyecto'])!.value,
      unidad_proyecto: this.editForm.get(['unidad_proyecto'])!.value,
      tipo: this.editForm.get(['tipo'])!.value,
      actividad: this.editForm.get(['actividad'])!.value,
      fecha_inicio: this.editForm.get(['fecha_inicio'])!.value,
      estado: this.editForm.get(['estado'])!.value,
      descripcion: this.editForm.get(['descripcion'])!.value,
      longitud: this.editForm.get(['longitud'])!.value,
      latitud: this.editForm.get(['latitud'])!.value,
      resolucion: this.editForm.get(['resolucion'])!.value,
      label: this.editForm.get(['label'])!.value,
    };
  }

  insertRaw(): void{
    const row = this.createFromForm();
    this.rowsDataPredict.push(row);
    this.editForm.reset();
    console.log(this.rowsDataPredict);
  }

  getPredictions() {
    this.dataSetService.getPredictions(this.rowsDataPredict).subscribe(res =>{
      if (res){
        this.rowsDataPredict = res;
      }
    });
  }
}
