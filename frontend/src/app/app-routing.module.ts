import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { BalanceComponent } from './balance/balance.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'home',component:AdminhomeComponent},
  {path:'',component:LoginComponent},
  {path:'account',component:AccountComponent},
  {path:'view',component:ViewComponent},
  {path:'update', component:UpdateComponent},
  {path:'delete', component:DeleteComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'balance', component:BalanceComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'history',component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
