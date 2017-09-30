import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

import { UsersService } from './../../users.service';
import { UserRepositoriesDetailsComponent } from './user-repositories-details.component';

describe('UserRepositoriesDetailsComponent', () => {
  let component: UserRepositoriesDetailsComponent;
  let fixture: ComponentFixture<UserRepositoriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        LoadingModule.forRoot({
          animationType: ANIMATION_TYPES.rotatingPlane,
          backdropBackgroundColour: 'rgba(0,0,0,0.2)',
          backdropBorderRadius: '4px',
          primaryColour: '#3377ff',
          secondaryColour: '#ffffff',
          tertiaryColour: '#ffffff',
          fullScreenBackdrop: true
      }),
      RouterTestingModule,
      HttpModule
      ],
      declarations: [ UserRepositoriesDetailsComponent ],
      providers: [UsersService]
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
