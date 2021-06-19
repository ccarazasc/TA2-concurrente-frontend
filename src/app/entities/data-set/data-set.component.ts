import { Component, OnInit } from '@angular/core';
import {IRowData} from "../../shared/models/row-data";
import {DataSetService} from "./data-set.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-set',
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.css']
})
export class DataSetComponent implements OnInit {
  rowsData: IRowData[] = [];
  constructor(
    protected dataSetService: DataSetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataSetService.getRowsData().subscribe(res => {
      if (res && res.body){
        this.rowsData = res.body;
      }
    })
  }

  goToPredict() {
    this.router.navigate(['/predict'])
  }
}
