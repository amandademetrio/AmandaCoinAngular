import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowserComponent } from './browser/browser.component';
import { HomeComponent } from './home/home.component';
import { LedgerDetailsComponent } from './ledger-details/ledger-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'home',component: HomeComponent},
    {path:'mine',component: MineComponent},
    {path:'buy',component: BuyComponent},
    {path:'sell',component: SellComponent},
    {path:'browse',component: BrowserComponent},
    {path:'details/:id',component: LedgerDetailsComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }