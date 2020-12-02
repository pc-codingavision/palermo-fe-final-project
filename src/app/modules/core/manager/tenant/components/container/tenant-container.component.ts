import { Component, OnInit } from '@angular/core'
import { PhoneType, Role } from '@shared/enum/enums'

import { InMemoryTenantService } from './../../../../../shared/services/tenant/in-memory-tenant.service'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit {
  constructor(private inmemorytenant: InMemoryTenantService) {}

  ngOnInit(): void {
    // this.inmemorytenant
    //   .add({
    //     id: 3,
    //     name: { firstName: 'Ugo', surname: 'Fantozzi' },
    //     phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
    //     mail: 'rag-fantozzi@test.com',
    //     picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    //     username: 'ragUgo',
    //     password: '4321',
    //     status: true,
    //     dateOfBirth: new Date(1960, 1, 1),
    //     role: Role.Tenant,
    //     address: { line1: 'Via Pina', city: 'Roma', state: 'Italia', postCode: '90000' },
    //     fullName: '',
    //   })
    //   .subscribe((response) => {
    //     this.inmemorytenant.getAll().subscribe((res) => {
    //       console.log(res)
    //       this.inmemorytenant.delete(2).subscribe((re) => {
    //         this.inmemorytenant.getAll().subscribe((r) => console.log(r))
    //       })
    //     })
    //   })

    this.inmemorytenant
      .update({
        id: 2,
        name: { firstName: 'Matteo', surname: 'Fantozzi' },
        phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
        mail: 'rag-fantozzi@test.com',
        picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
        username: 'ragUgo',
        password: '4321',
        status: true,
        dateOfBirth: new Date(1960, 1, 1),
        role: Role.Tenant,
        address: { line1: 'Via Pina', city: 'Roma', state: 'Italia', postCode: '90000' },
        fullName: '',
      })
      .subscribe((res) => {
        this.inmemorytenant.getByName('Matteo').subscribe((r) => console.log(r))
      })
  }
}
