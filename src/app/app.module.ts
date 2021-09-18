import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MockServiceService } from './mock-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormatPhonePipe } from './format-phone.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,FormatPhonePipe ],
  bootstrap:    [ AppComponent ],
  providers:[MockServiceService]
})
export class AppModule { }
