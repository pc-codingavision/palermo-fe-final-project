import { Component, OnInit } from '@angular/core'

import { Role } from './shared/enum/role'
import { Landlord } from './shared/models/landlord'

@Component({
  selector: 'cav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cav-final-project'

  ngOnInit(): any {
    const Landlord1 = Landlord.Build({
      id: '1',
      name: { firstName: 'Matteo', surname: 'Oliva' },
      phone: '33333',
      mail: 'oliva@matteo.it',
      picture: 'something',
      username: 'matteus',
      password: '123456789',
      userStatus: true,
      dateOfBirth: new Date(1990, 8, 3),
      role: Role.Manager,
      address: {
        line1: 'Via Giovanni',
        line2: 'Fattori',
        city: 'Catania',
        state: 'Italia',
        postCode: '95030',
      },
      fullName: '',
    })

    console.log(Landlord1)
  }
}
