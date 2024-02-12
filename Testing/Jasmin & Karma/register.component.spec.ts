import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('Register form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });


  it('To test the component created', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'Register Component'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EBankingProject');
  });


  it('Register form Component GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);  
  });


  it('Register form initial value', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
    
      userId: "",
      customerName: '',
      emailId: "",
      password: '',
      mobile: '',
      aadharNo: '',
      role:''
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });


  it('Register form valid by valid data', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue("70");
    app.myForm.controls?.['customerName'].setValue("Dom");
    app.myForm.controls?.['emailId'].setValue("9647234567");
    app.myForm.controls?.['password'].setValue("dom@gmail.com");
    app.myForm.controls?.['mobile'].setValue("123");
    app.myForm.controls?.['aadharNo'].setValue("customer");
    app.myForm.controls?.['role'].setValue("customer");
    expect(app.myForm.valid).toBeFalse();
  });


  it('Register form valid by invalid data', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue(" ");
    app.myForm.controls?.['customerName'].setValue(" ");
    app.myForm.controls?.['emailId'].setValue(0);
    app.myForm.controls?.['emailId'].setValue(" ");
    app.myForm.controls?.['password'].setValue(" ");
    app.myForm.controls?.['aadharNo'].setValue(" ");
    app.myForm.controls?.['role'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });
});

