import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoriesDetailsComponent } from './user-repositories-details.component';

describe('UserRepositoriesDetailsComponent', () => {
  let component: UserRepositoriesDetailsComponent;
  let fixture: ComponentFixture<UserRepositoriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepositoriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepositoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
