import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Tenant } from 'src/app/shared/models/tenant'

import { TENANTS } from './../../../../../../shared/models/mock-data/mock-tenant'

@Component({
  selector: 'cav-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  tenant: Tenant[] = []
  tenants = this.tenant
  nameControl = new FormControl()
  emailControl = new FormControl()
  phoneControl = new FormControl()
  tenantsPhoneNumber = this.tenants.map((n) => n.phone)
  constructor() {}

  ngOnInit(): void {
    TENANTS.forEach((v) => {
      this.tenant.push(Tenant.Build(v))
    })
  }
}
