import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class LandlordListResolver implements Resolve<Observable<Landlord[]>> {
  constructor(private landlordService: LandlordService) {}

  resolve(): Observable<Landlord[]> | any {
    return this.landlordService.getAll().pipe(
      map((response) => response),
      catchError((err) => {
        console.log(err)
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

    alert(`Sorry,something went wrong. '\n' ${errorGroup}`)

    return throwError(`${errorMessage}`)
  }
}
