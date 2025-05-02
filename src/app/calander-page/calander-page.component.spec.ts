import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalanderPageComponent } from './calander-page.component';

describe('CalanderPageComponent', () => {
  let component: CalanderPageComponent;
  let fixture: ComponentFixture<CalanderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalanderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalanderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
