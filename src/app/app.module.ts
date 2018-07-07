import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UploadFileService} from "./service/upoload-file.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { UploadFileDetailsComponent } from './upload-file-details/upload-file-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadFileDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
