import { UsersService } from './../users.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoriesComponent } from './user-repositories.component';

describe('UserRepositoriesComponent', () => {
  let component: UserRepositoriesComponent;
  let fixture: ComponentFixture<UserRepositoriesComponent>;

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
      declarations: [ UserRepositoriesComponent ],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
