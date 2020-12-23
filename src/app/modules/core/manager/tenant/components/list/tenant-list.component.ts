import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { Tenant } from '@shared/models/tenant'

export interface Elements {
  avatar: string
  fullName: string
  username: string
  mail: string
}

@Component({
  selector: 'cav-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TenantListComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<Tenant[]>
  @Output() toogleStatus: EventEmitter<Tenant> = new EventEmitter<Tenant>()
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()
  displayedColumns: string[] = ['avatar', 'fullName', 'username', 'mail']
  expandedElement: Elements | null

  constructor() {}

  ngOnInit(): void {}

  toggleStatus(event: Tenant): void {
    this.toogleStatus.emit(event)
  }

  deleteTenant(event: number): void {
    this.delete.emit(event)
  }
}
