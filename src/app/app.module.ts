import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SwmStartListComponent } from './swm-start-list/swm-start-list.component';
import { SwmStartListService } from './swm-start-list/swm-start-list.service'

@NgModule({
  declarations: [
    AppComponent,
    SwmStartListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SwmStartListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
