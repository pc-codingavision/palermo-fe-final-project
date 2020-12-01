import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Tenant } from '@shared/models/tenant'
import { Observable, of } from 'rxjs'
import { filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class InMemoryTenantService {
  constructor(private http: HttpClient) {}

  private tenantsUrl = 'api/tenants'

  getAll(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(this.tenantsUrl)
  }

  getById(id: number): Observable<Tenant> {
    const idUrl = `${this.tenantsUrl}/?id=${id}`
    return this.http.get<Tenant>(idUrl).pipe(filter((tenant) => tenant.id === id))
  }

  getByName(name: string): Observable<Tenant[]> {
    const nameUrl = `${this.tenantsUrl}/?name=${name}`

    if (!name.trim()) {
      return of([])
    }
    return this.http
      .get<Tenant[]>(nameUrl)
      .pipe(map((response) => response.filter((data) => data.name.firstName === name)))
  }

  getBySurname(surname: string): Observable<Tenant[]> {
    const surnameUrl = `${this.tenantsUrl}/?surname=${surname}`

    if (!surname.trim()) {
      return of([])
    }
    return this.http
      .get<Tenant[]>(surnameUrl)
      .pipe(map((response) => response.filter((data) => data.name.surname === surname)))
  }

  getByMail(mail: string): Observable<Tenant[]> {
    const mailUrl = `${this.tenantsUrl}/?mail=${mail}`
    if (!mail.trim) {
      return of([])
    }
    return this.http
      .get<Tenant[]>(mailUrl)
      .pipe(map((response) => response.filter((data) => data.mail === mail)))
  }

  getByStatus(status: boolean): Observable<Tenant[]> {
    const statusUrl = `${this.tenantsUrl}/?status=${status}`
    if (!status) {
      return of([])
    }
    return this.http
      .get<Tenant[]>(statusUrl)
      .pipe(map((response) => response.filter((data) => data.status === status)))
  }

  add(tenant: Tenant): Observable<Tenant> {
    return this.http.post<Tenant>(this.tenantsUrl, tenant)
  }

  delete(id: number): Observable<{}> {
    const idUrl = `${this.tenantsUrl}/?id=${id}`
    return this.http.delete<Tenant>(idUrl)
  }

  update(tenant: Tenant): Observable<Tenant> {
    return this.http.put<Tenant>(this.tenantsUrl, tenant)
  }
}

/*
Retrieve tenant by name
Retrieve tenant by surname
Retrieve tenant by email
Retrieve tenant by status
Add new tenant
Update an existing tenant
Delete tenant
*/
