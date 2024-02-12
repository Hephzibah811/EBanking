import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('Account form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });


  it('To test the component created', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'Account Component'`, () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EBankingProject');
  });


  it('Account form Component GUI count', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(2);  
  });


  it('Account form initial value', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
    
      
      userId: '',
      accountType: "",
      balance: '',
      mobile:'',
      aadharNo:'',
      role:''
      
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });


  it('Account form valid by valid data', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue("1022");
    app.myForm.controls?.['accountType'].setValue("saving");
    app.myForm.controls?.['balance'].setValue("2000");
    expect(app.myForm.valid).toBeFalsy();
  });


  it('Account form valid by invalid data', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue(0);
    app.myForm.controls?.['accountType'].setValue("");
    app.myForm.controls?.['balance'].setValue(0);
    expect(app.myForm.valid).toBeFalsy();
  });
});


