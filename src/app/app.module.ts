import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule
 } from '@angular/material';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
