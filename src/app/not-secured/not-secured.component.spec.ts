import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSecuredComponent } from './not-secured.component';

describe('NotSecuredComponent', () => {
  let component: NotSecuredComponent;
  let fixture: ComponentFixture<NotSecuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSecuredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotSecuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
