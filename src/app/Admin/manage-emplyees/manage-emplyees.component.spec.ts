import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmplyeesComponent } from './manage-emplyees.component';

describe('ManageEmplyeesComponent', () => {
  let component: ManageEmplyeesComponent;
  let fixture: ComponentFixture<ManageEmplyeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEmplyeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmplyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
