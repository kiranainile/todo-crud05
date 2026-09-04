import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackabrService {

  constructor(
    private _SnackBar:MatSnackBar
  ) { }


  
  openSnackBar(msg:string){
    this._SnackBar.open(msg,'close'{
      horizontalPosition:'right',
      verticalPosition:'top',
      duration:30000
    })
  }

}
