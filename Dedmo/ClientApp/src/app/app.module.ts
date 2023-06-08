import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { VocabularyListComponent } from './VocabularyList/Vocabulary-list.component';
import { VocabularyBLService } from './Services/vocab.bl.service';
import { VocabularyDLService } from './Services/vocab.dl.service';

@NgModule({
  providers: [
    VocabularyBLService,
    VocabularyDLService],
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    VocabularyListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'VocabularyList', component: VocabularyListComponent },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
