import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class LandlordListResolver implements Resolve<Landlord[]> {
  constructor(
    private landlordService: LandlordService,
    private snackBar: SnackBarService
  ) {}

  resolve(): Observable<Landlord[]> | any {
    return this.landlordService.getAll().pipe(
      catchError((err) => {
        return this.handleError(err)
      })
    )
  }

  handleError(err): any {
    let errorMessage = ''
    const errorGroup = `Error Code: ${err.status}'\n' Error: ${err.error.message} '\n' Message: ${err.message}`
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error: ${err.error.message}`
    } else {
      errorMessage = errorGroup
    }

    this.snackBar.openSnackBar(`Sorry,something went wrong. ${errorGroup}`, 'Close', 5000)

    return throwError(`${errorMessage}`)
  }
}
