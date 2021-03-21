import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTransactionsPageRoutingModule } from './all-transactions-routing.module';

import { AllTransactionsPage } from './all-transactions.page';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    AllTransactionsPageRoutingModule
  ],
  declarations: [AllTransactionsPage]
})
export class AllTransactionsPageModule {}
