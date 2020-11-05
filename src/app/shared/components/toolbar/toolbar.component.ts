import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { AuthService } from '@modules/core/auth/auth.service'
import { combineLatest } from 'rxjs'
import { tap } from 'rxjs/operators'
import { SubSink } from 'subsink'

@Component({
  selector: 'cav-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
    `
      .image-cropper {
        width: 40px;
        height: 40px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        margin-top: -8px;
      }
    `,
  ],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  title = 'RentMe'
  opened = false

  @Output() toggleSideNav = new EventEmitter<void>()

  constructor(public authService: AuthService, public media: MediaObserver) {}

  ngOnInit(): void {
    this.subs.sink = combineLatest([
      this.authService.authStatus$,
      this.media.asObservable(),
    ])
      .pipe(
        tap(([authStatus, mediaValue]) => {
          if (!authStatus?.isAuthenticated) {
            this.opened = false
          } else {
            this.opened = mediaValue[0].mqAlias !== 'xs'
          }
        })
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
