import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SwmComponent } from './swm/swm.component';
import { SwmStartListComponent } from './swm-start-list/swm-start-list.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { FontDirective } from './directives/font.directive';
import { colorDirective } from './directives/color.directive';
import { BdayPipe } from './pipes/bday.pipe';
import { PersonFilterPipe } from './pipes/person-filter.pipe';
import { SwimResultComponent } from './components/swim-results/swim-result/swim-result.component';
import { ResultsService } from './services/results.service';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { SwmStartListService } from './swm-start-list/swm-start-list.service'

@NgModule({
  declarations: [
    AppComponent,
    SwmComponent,
    SwmStartListComponent,
    RegFormComponent,
    FontDirective,
    colorDirective,
    BdayPipe,
    PersonFilterPipe,
    SwimResultComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ResultsService, SwmStartListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
