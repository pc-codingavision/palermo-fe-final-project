import { Component, OnInit } from '@angular/core'
import { TenantService } from '@modules/shared/services/tenant/tenant.service'
import { PhoneType, Role } from '@shared/enum/enums'
import { Tenant } from '@shared/models/tenant'
import { Observable } from 'rxjs'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit {
  tenants$: Observable<Tenant[]>
  constructor(public tenantService: TenantService) {}

  ngOnInit(): void {
    this.getAll()
    this.update()
    this.getAll()
  }

  getAll(): void {
    this.tenants$ = this.tenantService.getAll()
  }

  add(): void {
    this.tenantService.add({
      id: 3,
      name: {
        firstName: 'Prova',
        surname: 'No',
      },
      phone: [
        {
          id: 1,
          type: PhoneType.Mobile,
          digits: '321456789',
        },
      ],
      mail: 'rag-fantozzi@test.com',
      picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      username: 'ragUgo',
      password: '4321',
      status: true,
      dateOfBirth: new Date(),
      role: Role.Tenant,
      address: {
        line1: 'Via Pina',
        city: 'Roma',
        state: 'Italia',
        postCode: '90000',
      },
      fullName: 'Prova no',
    })
  }

  delete(): void {
    this.tenantService.delete(1)
  }

  update(): void {
    this.tenantService.update({
      id: 1,
      name: {
        firstName: 'Prova',
        surname: 'Update',
      },
      phone: [
        {
          id: 1,
          type: PhoneType.Mobile,
          digits: '321456789',
        },
      ],
      mail: 'rag-fantozzi@test.com',
      picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      username: 'ragUgo',
      password: '4321',
      status: true,
      dateOfBirth: new Date(),
      role: Role.Tenant,
      fullName: 'Prova',
      address: {
        line1: 'Via Pina',
        city: 'Roma',
        state: 'Italia',
        postCode: '90000',
      },
    })
  }
}
