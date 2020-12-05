import { Component, OnInit } from '@angular/core'

import { InMemoryTenantService } from './../../../../../shared/services/tenant/in-memory-tenant.service'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit {
  constructor(private inmemorytenant: InMemoryTenantService) {}

  ngOnInit(): void {
    // this.inmemorytenant.getAll().subscribe((response) => {
    //   console.log('GetAll :')
    //   console.log(response)
    // })
    // this.inmemorytenant.getById(null).subscribe((response) => {
    //   console.log('GetById with id "1" ')
    //   console.log(response)
    // })
    // /* must fix getByName for lowercase */
    // this.inmemorytenant.getByName(null).subscribe((response) => {
    //   console.log('GetByName with name "Ugo" ')
    //   console.log(response)
    // })
    // // /* must fix getBySurname for lowercase */
    // this.inmemorytenant.getBySurname(null).subscribe((response) => {
    //   console.log('GetBySurname with surname "Fantozzi" ')
    //   console.log(response)
    // })
    // this.inmemorytenant.getByMail('fant').subscribe((response) => {
    //   console.log('GetByMail with mail "rag-fantozzi@test.com" ')
    //   console.log(response)
    // })
    // this.inmemorytenant.getByStatus(true).subscribe((response) => {
    //   console.log('GetByStatus with status "true"')
    //   console.log(response)
    // })
    // this.inmemorytenant.getByStatus(false).subscribe((response) => {
    //   console.log('GetByStatus with status "false"')
    //   console.log(response)
    // })
    // this.inmemorytenant.getByStatus(null).subscribe((response) => {
    //   console.log('GetByStatus with status "false"')
    //   console.log(response)
    // })
    // this.inmemorytenant
    //   .add({
    //     id: null,
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
    //     console.log('Added new Tenant with id "3"')
    //     this.inmemorytenant.getAll().subscribe((res) => {
    //       console.log('Call GetAll')
    //       console.log(res)
    //       this.inmemorytenant.delete(2).subscribe((re) => {
    //         console.log('Delete Tenant with id "2"')
    //         this.inmemorytenant.getAll().subscribe((r) => {
    //           console.log('Calling GetAll')
    //           console.log(r)
    //         })
    //       })
    //     })
    //   })
    // this.inmemorytenant
    //   .update({
    //     id: 3,
    //     name: { firstName: 'Matteo', surname: 'Oliva' },
    //     phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
    //     mail: 'olivamatteus@gmail.com',
    //     picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    //     username: 'matteus',
    //     password: '1234',
    //     status: false,
    //     dateOfBirth: new Date(1960, 3, 9),
    //     role: Role.Tenant,
    //     address: {
    //       line1: 'Via Etnea',
    //       city: 'Catania',
    //       state: 'Italia',
    //       postCode: '95030',
    //     },
    //     fullName: '',
    //   })
    //   .subscribe((res) => {
    //     console.log('Updating Tenant with id 3')
    //     this.inmemorytenant.getByName('Matteo').subscribe((response) => {
    //       console.log('getByName with name "Matteo"')
    //       console.log(response)
    //     })
    //   })
    // this.inmemorytenant
    //   .add({
    //     id: null,
    //     name: { firstName: 'Nuovo', surname: 'Utente' },
    //     phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
    //     mail: 'nuovo@gmail.com',
    //     picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    //     username: 'new',
    //     password: '1234',
    //     status: true,
    //     dateOfBirth: new Date(1960, 3, 9),
    //     role: Role.Tenant,
    //     address: {
    //       line1: 'Via Etnea',
    //       city: 'Catania',
    //       state: 'Italia',
    //       postCode: '95030',
    //     },
    //     fullName: '',
    //   })
    //   .subscribe((response) => console.log(response))
  }
}
