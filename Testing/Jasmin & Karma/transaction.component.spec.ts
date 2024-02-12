import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionComponent } from './transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('Transaction form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });


  it('To test the component created', () => {
    const fixture = TestBed.createComponent(TransactionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'Transaction Component'`, () => {
    const fixture = TestBed.createComponent(TransactionComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EBankingProject');
  });


  it('Transaction form Component GUI count', () => {
    const fixture = TestBed.createComponent(TransactionComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(3);  
  });


  it('Transaction form initial value', () => {
    const fixture = TestBed.createComponent(TransactionComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
    

      userId: "",
      transactionId: '',
      amount: "",
      
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });


  it('Transaction form valid by valid data', () => {
    const fixture = TestBed.createComponent(TransactionComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue("70");
    app.myForm.controls?.['transactionId'].setValue("123");
    app.myForm.controls?.['amount'].setValue("2000");
    expect(app.myForm.valid).toBeTruthy();
  });


  it('Transaction form valid by invalid data', () => {
    const fixture = TestBed.createComponent(TransactionComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue(0);
    app.myForm.controls?.['transactionId'].setValue(0);
    app.myForm.controls?.['amount'].setValue(0);
    expect(app.myForm.valid).toBeTruthy();
  });
});

