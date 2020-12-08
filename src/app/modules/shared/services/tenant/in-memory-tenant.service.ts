import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Tenant } from '@shared/models/tenant'
import { Observable } from 'rxjs'

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
    const idUrl = `${this.tenantsUrl}/${id}`
    return this.http.get<Tenant>(idUrl)
  }

  getByName(name: string): Observable<Tenant[]> {
    const nameUrl = `${this.tenantsUrl}?name=${name}`
    return this.http.get<Tenant[]>(nameUrl)
  }

  getBySurname(surname: string): Observable<Tenant[]> {
    const surnameUrl = `${this.tenantsUrl}?surname=${surname}`
    return this.http.get<Tenant[]>(surnameUrl)
  }

  getByMail(mail: string): Observable<Tenant[]> {
    const mailUrl = `${this.tenantsUrl}?mail=${encodeURIComponent(mail)}`
    return this.http.get<Tenant[]>(mailUrl)
  }

  getByStatus(status: boolean): Observable<Tenant[]> {
    const statusUrl = `${this.tenantsUrl}?status=${status}`
    return this.http.get<Tenant[]>(statusUrl)
  }

  add(tenant: Tenant): Observable<Tenant> {
    return this.http.post<Tenant>(this.tenantsUrl, tenant)
  }

  delete(id: number): Observable<{}> {
    const idUrl = `${this.tenantsUrl}/${id}`
    return this.http.delete<Tenant>(idUrl)
  }

  update(tenant: Tenant): Observable<Tenant> {
    return this.http.put<Tenant>(this.tenantsUrl, tenant)
  }
}
