import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable, of, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class LandlordListResolver implements Resolve<Observable<Landlord[]>> {
  constructor(private landlordService: LandlordService) {}

  resolve(): Observable<Landlord[]> {
    return this.landlordService.getAll().pipe(
      catchError((err) => {
        console.log(err)
        return this.handleError
      })
    )
  }

  handleError(error): any {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`
    } else {
      errorMessage = `Error Code: ${error.status} Message: ${error.message}`
    }

    alert(errorMessage)
    throwError(errorMessage)
    return of(Landlord.Build())
  }
}
