import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticPackagesComponent } from './domestic-packages.component';

describe('DomesticPackagesComponent', () => {
  let component: DomesticPackagesComponent;
  let fixture: ComponentFixture<DomesticPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomesticPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
