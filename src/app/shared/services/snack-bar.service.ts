import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string = 'OK', duration: number = 2500): void {
    this.snackBar.open(message, action, { duration })
  }
}
