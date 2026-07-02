import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPopupsComponent } from './register-popups.component';

describe('RegisterPopupsComponent', () => {
  let component: RegisterPopupsComponent;
  let fixture: ComponentFixture<RegisterPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPopupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
