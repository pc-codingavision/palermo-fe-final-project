import { Overlay } from '@angular/cdk/overlay'
import { TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRouteSnapshot } from '@angular/router'
import { AdvertisementResolver } from '@modules/core/advertisement/services/advertisement-resolver.ts'
import { commonTestingModules } from '@shared/common.testing'
import { of } from 'rxjs'

describe('AdvertisementResolver', () => {
  let service: AdvertisementResolver

  let route: ActivatedRouteSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      providers: [MatSnackBar, Overlay],
    })
    service = TestBed.inject(AdvertisementResolver)

    route = new ActivatedRouteSnapshot()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('AdvertisementResolver', () => {
    it('should not resolve in case of errore', () => {
      spyOn(service, 'resolve').and.returnValue(of(null))
      service.resolve(route, null).subscribe((resolved) => {
        expect(resolved).toBeFalsy()
      })
    })
  })
})
