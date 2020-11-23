import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanceRequestComponent } from './distance/distance-request/distance-request.component';
import { DistanceDetailsComponent } from './distance/distance-details/distance-details.component';
import { Globals } from './globals'

@NgModule({
  declarations: [
    AppComponent,
    DistanceRequestComponent,
    DistanceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
})
export class AppModule {}
