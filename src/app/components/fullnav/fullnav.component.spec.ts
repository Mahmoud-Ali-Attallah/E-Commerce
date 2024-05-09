import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullnavComponent } from './fullnav.component';

describe('FullnavComponent', () => {
  let component: FullnavComponent;
  let fixture: ComponentFixture<FullnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullnavComponent]
    });
    fixture = TestBed.createComponent(FullnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
