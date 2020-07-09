
import {MatTableDataSource} from '@angular/material';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PopulateTable<T, I> {

  public  populateTable(arrayOfClassObjects: T[], infoTable: I[], dataSource: MatTableDataSource<I>, arrayMapIteration): I[] {

    infoTable = this.populateTableOnInit(values);
    infoTable = arrayMapIteration(arrayOfClassObjects);

    return infoTable;

  }

  private populateTableOnInit(fromResponse: T[]) {
  
    return fromResponse.map(e => {
  
      return  {
        // orderNo: e.id,
        // orderDate: e.timestamp,
        // orderDueDate: e.id,
        // orderStatus: e.id
      };
  
    });
  }


}
