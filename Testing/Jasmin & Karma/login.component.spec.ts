import { ComponentFixture, TestBed } from '@angular/core/testing';


import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('Login form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });


  it('To test the Login component created', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'Login Component'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Login');
  });


  it('Login form Component GUI count', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Login');
  });


  it('Login form initial value', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      emailId: '',
      password: ''
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });


  it('Login form valid by valid data', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['emailId'].setValue("hephzi@gmail.con");
    app.myForm.controls?.['password'].setValue("7623");
    expect(app.myForm.valid).toBeFalsy();
  });


  it('Login form valid by invalid data', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['emailId'].setValue(" ");
    app.myForm.controls?.['password'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });
});
