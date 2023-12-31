import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ResultsSummaryComponent } from './components/results-summary/results-summary.component';
import { FooterComponent } from './components/footer/footer.component';
import { SummaryListItemComponent } from './components/summary-list-item/summary-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SummaryComponent,
    ResultsSummaryComponent,
    FooterComponent,
    SummaryListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
