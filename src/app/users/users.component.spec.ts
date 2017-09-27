import { FormsModule } from '@angular/forms';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { UsersService } from './users.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

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
      declarations: [ UsersComponent ],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
