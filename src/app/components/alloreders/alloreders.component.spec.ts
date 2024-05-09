import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloredersComponent } from './alloreders.component';

describe('AlloredersComponent', () => {
  let component: AlloredersComponent;
  let fixture: ComponentFixture<AlloredersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlloredersComponent]
    });
    fixture = TestBed.createComponent(AlloredersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
