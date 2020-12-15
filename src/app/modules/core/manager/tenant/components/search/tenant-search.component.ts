import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-tenant-search',
  templateUrl: './tenant-search.component.html',
  styleUrls: ['./tenant-search.component.scss'],
})
export class TenantSearchComponent implements OnInit {
  @Output() inputSearch = new EventEmitter<string>()
  @Output() checkStatus = new EventEmitter<string>()
  constructor() {}

  ngOnInit(): void {}

  emitString(data: string): void {
    this.inputSearch.emit(data)
  }

  radioChange(data: string): void {
    this.checkStatus.emit(data)
  }
}
