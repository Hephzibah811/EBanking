import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('Delete form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });


  it('To test the component created', () => {
    const fixture = TestBed.createComponent(DeleteComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'Delete Component'`, () => {
    const fixture = TestBed.createComponent(DeleteComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EBankingProject');
  });


  it('Delete form Component GUI count', () => {
    const fixture = TestBed.createComponent(DeleteComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(1);  
  });


  it('Delete form initial value', () => {
    const fixture = TestBed.createComponent(DeleteComponent);
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


  it('Delete form valid by valid data', () => {
    const fixture = TestBed.createComponent(DeleteComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue("70");
    expect(app.myForm.valid).toBeFalse();
  });


  it('Delete form valid by invalid data', () => {
    const fixture = TestBed.createComponent(DeleteComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue(" ");
  });
});
