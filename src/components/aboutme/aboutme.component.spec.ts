// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutmeComponent } from './aboutme.component'

describe('AboutmeComponent', () => {
  let component: AboutmeComponent
  let fixture: ComponentFixture<AboutmeComponent>

  beforeEach(async(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    TestBed.configureTestingModule({
      declarations: [AboutmeComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
