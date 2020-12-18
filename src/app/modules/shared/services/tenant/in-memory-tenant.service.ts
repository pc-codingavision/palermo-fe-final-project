import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Tenant } from '@shared/models/tenant'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class InMemoryTenantService {
  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  private tenantsUrl = 'api/tenants'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  private createCriteriaParameters(key: string, value: string): string {
    if (key === 'mail') {
      return `${this.tenantsUrl}?${key}=${encodeURIComponent(value)}`
    }
    return `${this.tenantsUrl}?${key}=${value}`
  }

  private handleException(key: any): void {
    if (key === null || key === undefined || key === '') {
      this.snackBar.openSnackBar('Sorry, something went wrong', 'close', 5000)
      throw new Error(`'${key}' is not allowed`)
    }
  }

  private buildTenants(tenants: Tenant[]): Tenant[] {
    if (Array.isArray(tenants)) {
      return tenants.map((tenant) => Tenant.Build(tenant))
    }
    return tenants
  }

  getAll(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(this.tenantsUrl).pipe(
      map((tenants) => this.buildTenants(tenants)),
      catchError(this.handleError<Tenant[]>('getAll'))
    )
  }

  getById(id: number): Observable<Tenant | null> {
    this.handleException(id)
    const idUrl = `${this.tenantsUrl}/${id}`
    return this.http.get<Tenant>(idUrl).pipe(
      map((tenant) => {
        if (tenant !== undefined) {
          return Tenant.Build(tenant)
        }
        return tenant
      }),
      catchError(this.handleError<Tenant>('getById'))
    )
  }

  getByName(name: string): Observable<Tenant[] | null> {
    this.handleException(name)
    const nameUrl = this.createCriteriaParameters('name', name)
    return this.http.get<Tenant[]>(nameUrl).pipe(
      map((tenants) => this.buildTenants(tenants)),
      catchError(this.handleError<Tenant[]>('getByName'))
    )
  }

  getBySurname(surname: string): Observable<Tenant[] | null> {
    this.handleException(surname)
    const surnameUrl = this.createCriteriaParameters('surname', surname)
    return this.http.get<Tenant[]>(surnameUrl).pipe(
      map((tenants) => this.buildTenants(tenants)),
      catchError(this.handleError<Tenant[]>('getByName'))
    )
  }

  getByMail(mail: string): Observable<Tenant[] | null> {
    this.handleException(mail)
    const mailUrl = this.createCriteriaParameters('mail', mail)
    return this.http.get<Tenant[]>(mailUrl).pipe(
      map((tenants) => this.buildTenants(tenants)),
      catchError(this.handleError<Tenant[]>('getByMail'))
    )
  }

  getByStatus(status: boolean): Observable<Tenant[] | null> {
    this.handleException(status)
    if (typeof status === 'boolean') {
      const statusUrl = `${this.tenantsUrl}?status=${status}`
      return this.http.get<Tenant[]>(statusUrl).pipe(
        map((tenants) => this.buildTenants(tenants)),
        catchError(this.handleError<Tenant[]>('getByStatus'))
      )
    }
    return of(null)
  }

  add(tenant: Tenant): Observable<Tenant | null> {
    this.handleException(tenant)
    if (tenant.id !== null) {
      tenant.id = null
    }
    if (tenant) {
      return this.http
        .post<Tenant>(this.tenantsUrl, tenant, this.httpOptions)
        .pipe(catchError(this.handleError<Tenant>('add')))
    }
    return of(null)
  }

  delete(id: number): Observable<{} | null> {
    this.handleException(id)
    if (id) {
      const idUrl = `${this.tenantsUrl}/${id}`
      return this.http
        .delete<Tenant>(idUrl, this.httpOptions)
        .pipe(catchError(this.handleError<Tenant>('delete')))
    }
    return of(null)
  }

  update(tenant: Tenant): Observable<Tenant | null> {
    this.handleException(tenant)
    return this.http
      .put<Tenant>(this.tenantsUrl, tenant, this.httpOptions)
      .pipe(catchError(this.handleError<Tenant>('update')))
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${JSON.stringify(error)}`)

      this.snackBar.openSnackBar(`${error.body.error}`, 'close', 10000)

      return of(result as T)
    }
  }
}
