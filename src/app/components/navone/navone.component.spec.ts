import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavoneComponent } from './navone.component';

describe('NavoneComponent', () => {
  let component: NavoneComponent;
  let fixture: ComponentFixture<NavoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavoneComponent]
    });
    fixture = TestBed.createComponent(NavoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
