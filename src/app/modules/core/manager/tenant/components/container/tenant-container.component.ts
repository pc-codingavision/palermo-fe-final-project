import { Component, OnInit } from '@angular/core'

import { InMemoryTenantService } from './../../../../../shared/services/tenant/in-memory-tenant.service'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit {
  constructor(private inmemorytenant: InMemoryTenantService) {}

  ngOnInit(): void {}
}
